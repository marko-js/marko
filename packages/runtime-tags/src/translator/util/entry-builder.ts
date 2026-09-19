import { types as t } from "@marko/compiler";
import {
  getTemplateId,
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import {
  buildLoadSetup,
  buildLoadSetupVirtualModule,
  loadTriggersToExpression,
} from "../visitors/tag/custom-tag";
import { getReadyId } from "./marko-config";
import { getScopeAccessorLiteral } from "./references";
import { resolveRelativeToEntry } from "./resolve-relative-to-entry";
import type { DOMRuntimeHelpers } from "./runtime";
import runtimeInfo from "./runtime-info";
import { type Section, StructureKind } from "./sections";
import { buildResumeRegisterKey } from "./signals";

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
  /** Lazy children of patch template reached eagerly, by channel, with
   * whether the parent template is a root: the entry registers the loaders
   * of the templates it never links, so a flush can still load them. */
  lazyLoads: Map<string, [request: string, bundled: boolean]>;
  /** Patch templates reached, with whether a bundled template's module
   * would register the load wiring of the lazy sites its shells create. */
  shelled: [file: t.BabelFile, bundled: boolean][];
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

    // A patch page's patches apply against the runtime, so its entry
    // initializes it (as the document's render) even with no client code.
    const patches = !!entryFile.markoOpts.patches;
    const init = state.init || patches;
    if (init || state.load) {
      const isPage = entryFile.path.node.extra.page || patches;
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
      // Only a patch page collects lazy loads (a flush can reveal a lazy
      // child the client never rendered); a template a linked root imports
      // registers its own. A plain page's output is unchanged.
      const lazyLoads = new Map(
        [...state.lazyLoads].filter(([, [, bundled]]) => !bundled || !linked),
      );
      const helpers = new Set<DOMRuntimeHelpers>();
      const call = (
        name: DOMRuntimeHelpers,
        ...args: (t.Expression | undefined)[]
      ) => {
        helpers.add(name);
        return t.callExpression(
          t.identifier(name),
          args.filter((arg) => arg !== undefined),
        );
      };
      const registrations: t.Statement[] = [];
      for (const [file, bundled] of state.shelled) {
        if (bundled && linked) continue;
        for (const [section, op] of createdLoadSites(file)) {
          const childFile = loadFileForImport(
            entryFile,
            resolveRelativeToEntry(entryFile, file, op.renderer.path),
          )!;
          const readyId = getReadyId(childFile)!;
          // A wired site's `_load_ready` owns the channel: an eager loader
          // would settle the flush before the site mounts the child.
          lazyLoads.delete(readyId);
          const { optimize } = entryFile.markoOpts;
          const loadExpr = t.arrowFunctionExpression(
            [],
            t.callExpression(t.import(), [
              t.stringLiteral(
                resolveRelativeToEntry(
                  entryFile,
                  file,
                  buildLoadSetupVirtualModule(
                    entryFile.markoOpts,
                    file,
                    childFile.opts.filename as string,
                    childFile.ast.program.extra.domExports!,
                  ),
                ),
              ),
            ]),
          );
          const trigger = loadTriggersToExpression(op.load, call);
          registrations.push(
            t.expressionStatement(
              call(
                "_resume",
                t.stringLiteral(
                  getTemplateId(
                    entryFile.markoOpts,
                    file.opts.filename as string,
                    buildResumeRegisterKey(section, op.marker!, "init"),
                  ),
                ),
                buildLoadSetup(
                  getScopeAccessorLiteral(op.marker!, true, false, optimize),
                  getScopeAccessorLiteral(op.scope!, true, false, optimize),
                  trigger ? t.callExpression(trigger, [loadExpr]) : loadExpr,
                  readyId,
                  call,
                ),
              ),
            ),
          );
        }
      }
      if (lazyLoads.size) helpers.add("_load_lazy");
      if (helpers.size) {
        body.push(
          t.importDeclaration(
            [...helpers].map((name) =>
              t.importSpecifier(t.identifier(name), t.identifier(name)),
            ),
            t.stringLiteral(
              `${runtimeInfo.name}/${
                entryFile.markoOpts.optimize ? "" : "debug/"
              }dom`,
            ),
          ),
        );
        body.push(...registrations);
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
      shelled: [],
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

    // A flush revealing a lazy child of a template the bundle never links
    // still needs its module, and a created site its load wiring: the
    // entry registers them itself.
    if (entryFile.markoOpts.patches) {
      const bundled = isRoot || !!state.bundled;
      for (const tag of (loadImports as Set<string> | undefined) || []) {
        const request = resolveRelativeToEntry(entryFile, file, tag);
        const loadFile = loadFileForImport(entryFile, request);
        const readyId = loadFile && getReadyId(loadFile);
        if (readyId) state.lazyLoads.set(readyId, [request, bundled]);
      }
      if (programExtra.shells) state.shelled.push([file, bundled]);
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

// The lazy sites a flush creates, as the html shells list their inits: a
// lazy child (not a fed one) of a branch, root, or created content shell.
function createdLoadSites(file: t.BabelFile) {
  const sites: [Section, CreatedLoadSite][] = [];
  const seen = new Set<Section>();
  const { shells } = file.path.node.extra;
  for (const id in shells) {
    const section = shells[id];
    if (
      seen.has(section) ||
      !(section.isBranch || !section.parent || section.contentShell === true)
    ) {
      continue;
    }
    seen.add(section);
    for (const op of section.structure || []) {
      if (
        typeof op === "object" &&
        op.kind === StructureKind.Child &&
        op.marker &&
        op.scope &&
        op.renderer?.kind === StructureKind.ExportRef &&
        !op.load?.downstreamCreated
      ) {
        sites.push([section, op as CreatedLoadSite]);
      }
    }
  }
  return sites;
}
type CreatedLoadSite = Extract<
  NonNullable<Section["structure"]>[number],
  { kind: typeof StructureKind.Child }
> & { renderer: { path: string } };

export default builder;
