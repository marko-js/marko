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
    isAsync?: boolean;
    page?: boolean;
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
  build(entryFile: EntryFile, exportInit?: boolean) {
    const state = entryFile[kState];
    if (!state) {
      throw entryFile.path.buildCodeFrameError(
        "Unable to build hydrate code, no files were visited before finalizing the build",
      );
    }
    const body: t.Statement[] = [];
    if (state.init) {
      const isPage = entryFile.path.node.extra.page;
      const initHelper: DOMRuntimeHelpers = isPage ? "init" : "initEmbedded";
      // The main entry import below pulls in every template (and therefore each
      // of their client assets) transitively, so the collected asset imports
      // are not needed here.
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
        t.importDeclaration(
          [],
          t.stringLiteral(`./${path.basename(entryFile.opts.filename)}`),
        ),
      );
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
      // A server only page has no runtime to initialize, so its client assets
      // (which an interactive page receives transitively through the main entry
      // import) must be linked in directly.
      for (const asset of state.assets) {
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

    if (programExtra.isInteractive || programExtra.needsCompat) {
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
