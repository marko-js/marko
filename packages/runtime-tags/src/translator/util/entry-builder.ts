import path from "node:path";

import { types as t } from "@marko/compiler";
import { getTemplateId } from "@marko/compiler/babel-utils";

import { resolveRelativeToEntry } from "./resolve-relative-to-entry";
import type { DOMRuntimeHelpers } from "./runtime";
import runtimeInfo from "./runtime-info";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    needsCompat?: boolean;
    isInteractive?: boolean;
    page?: boolean;
    // Set on the page entry program when its render is being translated inline
    // for the hydrate output (rather than importing the root module). Tells the
    // dynamic tag visitor to drop inert/server only class children.
    hydrateInlineRender?: boolean;
    // Set during an inline hydrate render translation when a class child
    // survives (is not dropped), meaning the compat layer is still required.
    hydrateKeptClassChild?: boolean;
  }
}

interface EntryState {
  init: boolean;
  assets: Set<string>;
}
type EntryFile = t.BabelFile & {
  [kState]?: EntryState;
};
const kState: unique symbol = Symbol();

export default {
  build(
    entryFile: EntryFile,
    exportInit?: boolean,
    // When provided (eg the interop builder dropping a server only class api
    // root), the listed templates are imported directly instead of the entry
    // root. Importing each pulls in its statically rendered subtree, so the
    // (foreign runtime) root and anything it only renders server side can be
    // dead code eliminated. When omitted the entry root is imported as before.
    importTargets?: readonly string[],
    // When provided, the entry root's already translated render is inlined in
    // place of importing it. The render has its server only (inert) class
    // children stripped, so unlike importing the root module it does not pull
    // in those children (and the foreign runtime they would carry). Its unused
    // `_template`/setup tree-shake, leaving just the client interactive roots.
    inlineRoot?: readonly t.Statement[],
  ) {
    const state = entryFile[kState];
    if (!state) {
      throw entryFile.path.buildCodeFrameError(
        "Unable to build hydrate code, no files were visited before finalizing the build",
      );
    }
    const body: t.Statement[] = [];
    const useTargets = importTargets !== undefined;
    // Nothing to initialize unless the tree is interactive. When importing
    // island templates in place of the root, there must also be at least one to
    // import (a fully server only island subtree needs no client runtime).
    const hasInit = state.init && (!useTargets || importTargets.length > 0);

    // The entry root import pulls in every template (and therefore each of
    // their client assets) transitively, so the collected asset imports are
    // only needed when the root is not imported: a server only page, one whose
    // runtime island roots are imported in the root's place, or one whose
    // render is inlined (a stripped child no longer carries its assets).
    if (useTargets || !state.init || inlineRoot) {
      for (const asset of state.assets) {
        body.push(t.importDeclaration([], t.stringLiteral(asset)));
      }
    }

    if (hasInit) {
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

      if (useTargets) {
        // Each island template self registers its resume handlers as a side
        // effect when imported, so the client can resume it regardless of which
        // (foreign runtime, server only) ancestor rendered it.
        for (const target of importTargets) {
          body.push(t.importDeclaration([], t.stringLiteral(target)));
        }
      } else if (inlineRoot) {
        // Inline the render in place of importing the root module. The default
        // export (the `_template(...)`) is re-exported under a fresh name rather
        // than as `default` (which the hydrate entry uses for `init`): the call
        // still needs to run to register the root renderer for resume. Mirroring
        // the imported module's exported `_template(...)` keeps it in debug
        // (where that registration is needed) while the `@__PURE__` initializer
        // still tree-shakes it — and the setup/walks it captures, including any
        // stripped child references — in optimized builds (where it is not).
        for (const stmt of inlineRoot) {
          if (t.isExportDefaultDeclaration(stmt)) {
            if (t.isExpression(stmt.declaration)) {
              body.push(
                t.exportNamedDeclaration(
                  t.variableDeclaration("const", [
                    t.variableDeclarator(
                      t.identifier(
                        entryFile.path.scope.generateUid("template"),
                      ),
                      stmt.declaration,
                    ),
                  ]),
                ),
              );
            }
          } else {
            body.push(stmt);
          }
        }
      } else {
        body.push(
          t.importDeclaration(
            [],
            t.stringLiteral(`./${path.basename(entryFile.opts.filename)}`),
          ),
        );
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
    const state = (entryFile[kState] ||= {
      init: false,
      assets: new Set(),
    });
    const programExtra = file.path.node.extra;
    const { analyzedTags, assetImports } = file.metadata.marko;

    // Only actual interactivity requires client runtime. Notably `needsCompat`
    // (rendering a Class API child) does not: that is needed to render the child
    // server side, but an inert/server only class child has no client behavior,
    // and a stateful one hydrates through the Marko 5 runtime independently. So
    // a Tags API page rendering only server only class children ships nothing.
    if (programExtra.isInteractive) {
      state.init = true;
    }

    // Link the template's known client side assets (styles, css imports, etc)
    // into the page entry so that static routes still ship them. These are
    // collected onto the metadata during analyze.
    if (assetImports) {
      for (const request of assetImports) {
        state.assets.add(resolveRelativeToEntry(entryFile, file, request));
      }
    }

    for (const tag of analyzedTags || []) {
      visitChild(tag);
    }
  },
};
