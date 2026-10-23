import path from "path";

import { types as t } from "@marko/compiler";
import {
  getTemplateId,
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { getUnusedParamIdentifier } from "./generate-uid";
import {
  type DOMRuntimeHelpers,
  getRuntimeFeatureImport,
  getRuntimePath,
} from "./runtime";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    needsCompat?: boolean;
    isInteractive?: boolean;
    hasClientStatement?: boolean;
    page?: boolean;
  }
}

interface EntryState {
  init: boolean;
  hasClientStatement: boolean;
  /** Whether a reached template lazily imports another. */
  lazy: boolean;
  /** Depth of enclosing templates whose modules the bundle already loads:
   * below a root everything arrives through its imports, and a lazy subtree
   * is loaded by its own load entry. */
  bundledDepth: number;
  /** Depth of enclosing lazy imports, whose load entries bring their assets. */
  lazyDepth: number;
  roots: string[];
  /** Assets of templates the bundle never loads; the entry imports them. */
  assets: Set<string>;
  /** Assets that arrive through a bundled template's imports; the entry
   * imports them itself only when it links nothing (a server only page). */
  bundledAssets: Set<string>;
  /** The most eager way each file has been reached. */
  visited: Map<string, Reach>;
}
/** How a file was reached: 0 eagerly, 1 below a bundled template, 2 only
 * within a lazy subtree. Lower is more eager, so `seen <= reach` means it was
 * already visited at least as eagerly and is skipped; a file reached more
 * eagerly than before is re-visited, since it may then own assets or a root. */
export type Reach = 0 | 1 | 2;
type EntryFile = t.BabelFile & {
  [kState]?: EntryState;
};
type VisitChild = (id: string, reach?: Reach) => void;
const kState: unique symbol = Symbol();

const builder = {
  build(entryFile: EntryFile, exportInit?: boolean) {
    const state = entryFile[kState];
    assertVisited(entryFile, state);
    const body: t.Statement[] = [];
    const isPage = entryFile.path.node.extra.page;
    const initHelper: DOMRuntimeHelpers = isPage ? "init" : "initEmbedded";

    // Client assets (styles, css imports, etc) of a template the bundle does
    // not link are imported directly, so that static routes still ship them.
    for (const asset of state.assets) {
      body.push(t.importDeclaration([], t.stringLiteral(asset)));
    }

    if (state.init || state.hasClientStatement) {
      if (state.init) {
        body.push(
          t.importDeclaration(
            [
              t.importSpecifier(
                t.identifier(initHelper),
                t.identifier(initHelper),
              ),
            ],
            t.stringLiteral(getRuntimePath("dom")),
          ),
        );
        if (state.lazy) body.push(getRuntimeFeatureImport("lazy"));
      }

      // The topmost templates with client side work or resumes; everything
      // below one of them (and its client assets) arrives through its imports.
      for (const root of state.roots) {
        body.push(t.importDeclaration([], t.stringLiteral(root)));
      }
    } else {
      // A server only page has no runtime to initialize, so nothing loads
      // the assets of the templates below it either.
      for (const asset of state.bundledAssets) {
        body.push(t.importDeclaration([], t.stringLiteral(asset)));
      }
    }

    if (!state.init) {
      // Client statements ran when the modules above loaded; with nothing
      // to resume there is no runtime to initialize.
      if (exportInit) {
        body.push(
          t.exportDefaultDeclaration(
            t.arrowFunctionExpression(
              [getUnusedParamIdentifier()],
              t.blockStatement([]),
            ),
          ),
        );
      }
      return body;
    }

    const { runtimeId } = entryFile.markoOpts;
    const readyId =
      !isPage && getTemplateId(entryFile.markoOpts, entryFile.opts.filename);
    const initExpression = t.callExpression(
      t.identifier(initHelper),
      readyId
        ? runtimeId
          ? [t.stringLiteral(readyId), t.stringLiteral(runtimeId)]
          : [t.stringLiteral(readyId)]
        : runtimeId
          ? [t.stringLiteral(runtimeId)]
          : [],
    );

    body.push(
      exportInit
        ? t.exportDefaultDeclaration(
            t.arrowFunctionExpression(
              [getUnusedParamIdentifier()],
              initExpression,
            ),
          )
        : t.expressionStatement(initExpression),
    );
    return body;
  },
  // Recurses into each reachable template, re-visiting a file reached more
  // eagerly than before, since only then can it become a root or own assets.
  // The interop entry passes a `visitChild` to dispatch each file itself.
  visit(
    file: t.BabelFile,
    entryFile: EntryFile,
    visitChild: VisitChild = (id, reach = 0) => {
      const resolved = resolveRelativeToEntry(entryFile, file, id);
      if (markReached(entryFile[kState]!.visited, resolved, reach)) {
        const childFile = loadFileForImport(entryFile, resolved);
        if (childFile) builder.visit(childFile, entryFile);
      }
    },
  ) {
    const state: EntryState = (entryFile[kState] ||= {
      init: false,
      hasClientStatement: false,
      lazy: false,
      bundledDepth: 0,
      lazyDepth: 0,
      roots: [],
      assets: new Set(),
      bundledAssets: new Set(),
      visited: createVisited(entryFile),
    });
    const programExtra = file.path.node.extra;
    const { analyzedTags, assetImports } = file.metadata.marko;
    const { loadImports } = programExtra;

    const init = !!(programExtra.isInteractive || programExtra.needsCompat);
    const hasClientStatement = !!programExtra.hasClientStatement;
    // The topmost templates with client side work or resumes are what the
    // bundle links; everything below one of them arrives through its imports.
    const isRoot =
      !state.bundledDepth &&
      (init || hasClientStatement || !!programExtra.hasResumes);

    if (init) state.init = true;
    if (hasClientStatement) state.hasClientStatement = true;
    if (loadImports) state.lazy = true;
    if (isRoot) {
      state.roots.push(
        resolveRelativePath(entryFile, file.opts.filename as string),
      );
    }

    // Collected during analyze (styles, css imports, etc).
    if (assetImports && !state.lazyDepth) {
      const assets =
        isRoot || state.bundledDepth ? state.bundledAssets : state.assets;
      for (const request of assetImports) {
        assets.add(resolveRelativeToEntry(entryFile, file, request));
      }
    }

    if (isRoot) state.bundledDepth++;
    // Copied because loading a child appends this file's own `analyzedTags`.
    for (const tag of analyzedTags ? [...analyzedTags] : []) {
      // A lazily imported subtree is loaded by its own load entry, never here.
      const lazy = loadImports?.has(tag);
      if (lazy) {
        state.bundledDepth++;
        state.lazyDepth++;
      }
      visitChild(tag, state.lazyDepth ? 2 : state.bundledDepth ? 1 : 0);
      if (lazy) {
        state.bundledDepth--;
        state.lazyDepth--;
      }
    }
    if (isRoot) state.bundledDepth--;
  },
};

export default builder;

export function assertVisited<S>(
  entryFile: t.BabelFile,
  state: S | undefined,
): asserts state is S {
  if (!state) {
    throw entryFile.path.buildCodeFrameError(
      "Unable to build hydrate code, no files were visited before finalizing the build",
    );
  }
}

// How eagerly each file has been reached, starting with the entry itself.
export function createVisited(entryFile: t.BabelFile) {
  return new Map<string, Reach>([
    [resolveRelativePath(entryFile, entryFile.opts.filename as string), 0],
  ]);
}

export function resolveRelativeToEntry(
  entryFile: t.BabelFile,
  file: t.BabelFile,
  req: string,
) {
  return file === entryFile
    ? resolveRelativePath(file, req)
    : resolveRelativePath(
        entryFile,
        req[0] === "."
          ? path.join(file.opts.filename as string, "..", req)
          : req,
      );
}

// Records a file reached more eagerly than before, which it then visits again.
export function markReached(
  visited: Map<string, Reach>,
  resolved: string,
  reach: Reach,
) {
  const seen = visited.get(resolved);
  if (seen !== undefined && seen <= reach) return false;
  visited.set(resolved, reach);
  return true;
}
