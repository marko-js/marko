import { types as t } from "@marko/compiler";
import {
  getTemplateId,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import type { DOMRuntimeHelpers } from "./runtime";
import runtimeInfo from "./runtime-info";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    needsCompat?: boolean;
    isInteractive?: boolean;
    page?: boolean;
  }
}

type EntryFile = t.BabelFile & {
  [kState]?: {
    imports: string[];
    init: boolean;
  };
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
    const body: t.Statement[] = state.imports.map((it) =>
      t.importDeclaration([], t.stringLiteral(it)),
    );
    if (state.init) {
      const isPage = entryFile.path.node.extra.page;
      const initHelper: DOMRuntimeHelpers = isPage ? "init" : "initEmbedded";
      body.unshift(
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
      imports: [],
      init: false,
    });
    const programExtra = file.path.node.extra;
    const { analyzedTags } = file.metadata.marko;
    state.imports.push(resolveRelativePath(entryFile, file.opts.filename));

    if (programExtra.isInteractive || programExtra.needsCompat) {
      state.init = true;
    }

    for (const tag of analyzedTags || []) {
      visitChild(tag);
    }
  },
};
