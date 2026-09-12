import { types as t } from "@marko/compiler";
import {
  getTemplateId,
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { getReadyId } from "./marko-config";
import { resolveRelativeToEntry } from "./resolve-relative-to-entry";
import type { DOMRuntimeHelpers } from "./runtime";
import runtimeInfo from "./runtime-info";

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
  load: boolean;
  /** Depth of enclosing templates whose modules the bundle already loads:
   * below a root everything arrives through its imports, and a lazy subtree
   * is loaded by its own load entry. */
  bundled: number;
  roots: string[];
  /** Assets of templates the bundle never loads; the entry imports them. */
  assets: Set<string>;
  /** Assets that arrive through a bundled template's imports; the entry
   * imports them itself only when it links nothing (a server only page). */
  bundledAssets: Set<string>;
  /** Whether each reached file was only ever seen below a bundled template. */
  visited: Map<string, boolean>;
  /** Lazy sites of persisted templates reached eagerly, by channel, with
   * whether the site's template is a root: the entry registers the loaders
   * of the templates it never links, so a flush can still load them. */
  lazyLoads: Map<string, [request: string, root: boolean]>;
}
type EntryFile = t.BabelFile & {
  [kState]?: EntryState;
};
type VisitChild = (id: string, bundled?: boolean) => void;
const kState: unique symbol = Symbol();

const builder = {
  build(entryFile: EntryFile, exportInit?: boolean) {
    const state = entryFile[kState];
    if (!state) {
      throw entryFile.path.buildCodeFrameError(
        "Unable to build hydrate code, no files were visited before finalizing the build",
      );
    }
    const body: t.Statement[] = [];

    // Client assets (styles, css imports, etc) of a template the bundle does
    // not link are imported directly, so that static routes still ship them.
    for (const asset of state.assets) {
      body.push(t.importDeclaration([], t.stringLiteral(asset)));
    }

    // A persisted page's patches apply against the runtime, so its entry
    // initializes it (as the document's render) even with no client code.
    const persisted = !!entryFile.markoOpts.persisted;
    const init = state.init || persisted;
    if (init || state.load) {
      const isPage = entryFile.path.node.extra.page || persisted;
      const initHelper: DOMRuntimeHelpers = isPage ? "init" : "initEmbedded";
      if (init) {
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
      }

      const linked = state.init || state.load;
      // Only a persisted page collects lazy loads (a flush can reveal a lazy
      // site the client never rendered); a plain page's output is unchanged.
      const lazyLoads = [...state.lazyLoads].filter(
        ([, [, root]]) => !root || !linked,
      );
      if (lazyLoads.length) {
        body.push(
          t.importDeclaration(
            [
              t.importSpecifier(
                t.identifier("_load_lazy"),
                t.identifier("_load_lazy"),
              ),
            ],
            t.stringLiteral(
              `${runtimeInfo.name}/${
                entryFile.markoOpts.optimize ? "" : "debug/"
              }dom`,
            ),
          ),
        );
        for (const [readyId, [request]] of lazyLoads) {
          body.push(
            t.expressionStatement(
              t.callExpression(t.identifier("_load_lazy"), [
                t.stringLiteral(readyId),
                // `.then(() => {})` drops the namespace, so the bundler keeps
                // the registrations alone (no export, no render).
                t.arrowFunctionExpression(
                  [],
                  t.callExpression(
                    t.memberExpression(
                      t.callExpression(t.import(), [t.stringLiteral(request)]),
                      t.identifier("then"),
                    ),
                    [t.arrowFunctionExpression([], t.blockStatement([]))],
                  ),
                ),
              ]),
            ),
          );
        }
      }

      if (linked) {
        // The topmost templates with client side work; everything below one
        // of them (and its client assets) arrives through its imports.
        for (const root of state.roots) {
          body.push(t.importDeclaration([], t.stringLiteral(root)));
        }
      } else {
        // No client work: the page needs its patch features, not its
        // templates' modules.
        for (const asset of state.bundledAssets) {
          body.push(t.importDeclaration([], t.stringLiteral(asset)));
        }
      }

      if (!init) {
        // Client statements ran when the modules above loaded; with nothing
        // to resume there is no runtime to initialize.
        if (exportInit) {
          body.push(
            t.exportDefaultDeclaration(
              t.arrowFunctionExpression([], t.blockStatement([])),
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
              t.arrowFunctionExpression([], initExpression),
            )
          : t.expressionStatement(initExpression),
      );
    } else {
      // A server only page has no runtime to initialize, so nothing loads
      // the assets of the templates below it either.
      for (const asset of state.bundledAssets) {
        body.push(t.importDeclaration([], t.stringLiteral(asset)));
      }

      if (exportInit) {
        body.push(
          t.exportDefaultDeclaration(
            t.arrowFunctionExpression([], t.blockStatement([])),
          ),
        );
      }
    }

    return body;
  },
  // Recurses into each reachable template once, resolving and loading it; a
  // file only ever reached below a bundled template is re-visited if later
  // reached eagerly, since only then can it become a root itself.
  // The interop entry passes a `visitChild` to dispatch each file itself.
  visit(
    file: t.BabelFile,
    entryFile: EntryFile,
    visitChild: VisitChild = (id, bundled = false) => {
      const state = entryFile[kState]!;
      const resolved = resolveRelativeToEntry(entryFile, file, id);
      const seenBundled = state.visited.get(resolved);
      if (seenBundled === false || (seenBundled && bundled)) return;
      state.visited.set(resolved, bundled);
      const childFile = loadFileForImport(entryFile, resolved);
      if (childFile) builder.visit(childFile, entryFile);
    },
  ) {
    const state: EntryState = (entryFile[kState] ||= {
      init: false,
      load: false,
      bundled: 0,
      roots: [],
      assets: new Set(),
      bundledAssets: new Set(),
      visited: new Map([
        [
          resolveRelativePath(entryFile, entryFile.opts.filename as string),
          false,
        ],
      ]),
      lazyLoads: new Map(),
    });
    const programExtra = file.path.node.extra;
    const { analyzedTags, assetImports } = file.metadata.marko;
    const { loadImports } = programExtra;

    const init = !!(programExtra.isInteractive || programExtra.needsCompat);
    const load = !!programExtra.hasClientStatement;
    // The topmost templates with client side work are what the bundle links;
    // everything below one of them arrives through its imports.
    const isRoot =
      !state.bundled && (init || load || !!programExtra.hasResumes);

    if (init) state.init = true;
    if (load) state.load = true;
    if (isRoot) {
      state.roots.push(
        resolveRelativePath(entryFile, file.opts.filename as string),
      );
    }

    // Collected during analyze (styles, css imports, etc).
    if (assetImports) {
      const assets =
        isRoot || state.bundled ? state.bundledAssets : state.assets;
      for (const request of assetImports) {
        assets.add(resolveRelativeToEntry(entryFile, file, request));
      }
    }

    // A flush revealing a lazy site of a template the bundle never links
    // still needs its module: the entry registers the loader itself.
    if (entryFile.markoOpts.persisted && !state.bundled) {
      for (const tag of (loadImports as Set<string> | undefined) || []) {
        const request = resolveRelativeToEntry(entryFile, file, tag);
        const loadFile = loadFileForImport(entryFile, request);
        const readyId = loadFile && getReadyId(loadFile);
        if (readyId) state.lazyLoads.set(readyId, [request, isRoot]);
      }
    }

    if (isRoot) state.bundled++;
    // Copied because loading a child appends this file's own `analyzedTags`.
    for (const tag of analyzedTags ? [...analyzedTags] : []) {
      // A lazily imported subtree is loaded by its own load entry, never here.
      const lazy = loadImports?.has(tag);
      if (lazy) state.bundled++;
      visitChild(tag, !!state.bundled);
      if (lazy) state.bundled--;
    }
    if (isRoot) state.bundled--;
  },
};

export default builder;
