import { types as t } from "@marko/compiler";
import {
  getTemplateId,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { resolveRelativeToEntry } from "./resolve-relative-to-entry";
import type { DOMRuntimeHelpers } from "./runtime";
import runtimeInfo from "./runtime-info";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    needsCompat?: boolean;
    isInteractive?: boolean;
    page?: boolean;
  }
}

interface VisitedFile {
  /** Runs client side work of its own, so the page needs the runtime at all. */
  interactive: boolean;
  /** Also true when the client only revives what this template registered. */
  resumed: boolean;
  assets: string[] | undefined;
  children: string[] | undefined;
  lazyChildren: string[] | undefined;
}
interface EntryState {
  /** Visited templates keyed by their entry relative import, in top down order. */
  files: Map<string, VisitedFile>;
}
type EntryFile = t.BabelFile & {
  [kState]?: EntryState;
};
const kState: unique symbol = Symbol();

export default {
  build(entryFile: EntryFile, exportInit?: boolean) {
    const state = entryFile[kState];
    if (!state) {
      throw entryFile.path.buildCodeFrameError(
        "Unable to build hydrate code, no files were visited before finalizing the build",
      );
    }
    const { interactive, roots, assets } = resolveInteractiveRoots(state);
    const body: t.Statement[] = [];

    // Client assets (styles, css imports, etc) of templates outside an interactive
    // root are linked directly; the rest arrive through their root's import.
    for (const asset of assets) {
      body.push(t.importDeclaration([], t.stringLiteral(asset)));
    }

    if (interactive) {
      const isPage = entryFile.path.node.extra.page;
      const initHelper: DOMRuntimeHelpers = isPage ? "init" : "initEmbedded";
      body.push(
        t.importDeclaration(
          [
            t.importSpecifier(
              t.identifier(initHelper),
              t.identifier(initHelper),
            ),
          ],
          t.stringLiteral(
            `${runtimeInfo.name}/${
              entryFile.markoOpts.optimize ? "" : "debug/"
            }dom`,
          ),
        ),
      );

      for (const root of roots) {
        body.push(t.importDeclaration([], t.stringLiteral(root)));
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
              t.arrowFunctionExpression([], initExpression),
            )
          : t.expressionStatement(initExpression),
      );
    } else if (exportInit) {
      // A server only page has no runtime to initialize.
      body.push(
        t.exportDefaultDeclaration(
          t.arrowFunctionExpression([], t.blockStatement([])),
        ),
      );
    }

    return body;
  },
  visit(
    file: t.BabelFile,
    entryFile: EntryFile,
    visitChild: (id: string) => void,
  ) {
    const state = (entryFile[kState] ||= { files: new Map() });
    const programExtra = file.path.node.extra;
    const { analyzedTags, assetImports, loadImports } = file.metadata.marko;
    const id = resolveRelativePath(entryFile, file.opts.filename as string);

    if (!state.files.has(id)) {
      const interactive = !!(
        programExtra.isInteractive ||
        programExtra.needsCompat ||
        programExtra.rendersClassTag
      );
      state.files.set(id, {
        interactive,
        resumed: interactive || !!programExtra.registersForResume,
        assets:
          assetImports &&
          Array.from(assetImports, (request) =>
            resolveRelativeToEntry(entryFile, file, request),
          ),
        children:
          analyzedTags &&
          Array.from(analyzedTags, (tag) =>
            resolveRelativeToEntry(entryFile, file, tag),
          ),
        lazyChildren:
          loadImports &&
          Array.from(loadImports, (request) =>
            resolveRelativeToEntry(entryFile, file, request),
          ),
      });
    }

    for (const tag of analyzedTags || []) {
      visitChild(tag);
    }
  },
};

/**
 * The topmost interactive templates are what the client bundle needs; each pulls
 * its own subtree in transitively, so an inert ancestor never has to be bundled.
 */
function resolveInteractiveRoots(state: EntryState) {
  const roots: string[] = [];
  const assets = new Set<string>();
  const bundled = new Set<string>();
  let interactive = false;

  for (const info of state.files.values()) {
    if (info.interactive) {
      interactive = true;
      break;
    }
  }

  // A lazily imported subtree is linked by its own load entry, never the page.
  for (const info of state.files.values()) {
    if (info.lazyChildren) {
      for (const lazyChild of info.lazyChildren) {
        if (!isEagerlyUsed(lazyChild)) addBundled(lazyChild);
      }
    }
  }

  // Top down, so a template that is already inside a root is skipped.
  if (interactive) {
    for (const [id, info] of state.files) {
      if (info.resumed && !bundled.has(id)) {
        roots.push(id);
        addBundled(id);
      }
    }
  }

  for (const [id, info] of state.files) {
    if (info.assets && !bundled.has(id)) {
      for (const asset of info.assets) {
        assets.add(asset);
      }
    }
  }

  return { interactive, roots, assets };

  function isEagerlyUsed(id: string) {
    for (const info of state.files.values()) {
      if (info.children?.includes(id) && !info.lazyChildren?.includes(id)) {
        return true;
      }
    }
    return false;
  }

  function addBundled(id: string) {
    if (bundled.has(id)) return;
    bundled.add(id);
    const info = state.files.get(id);
    if (info?.children) {
      for (const child of info.children) {
        addBundled(child);
      }
    }
  }
}
