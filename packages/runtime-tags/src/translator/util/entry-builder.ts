import { types as t } from "@marko/compiler";
import { resolveRelativePath } from "@marko/compiler/babel-utils";

import runtimeInfo from "./runtime-info";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    needsCompat?: boolean;
    isInteractive?: boolean;
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
      body.unshift(
        t.importDeclaration(
          [t.importSpecifier(t.identifier("init"), t.identifier("init"))],
          t.stringLiteral(
            `${runtimeInfo.name}/${
              entryFile.markoOpts.optimize ? "" : "debug/"
            }dom`,
          ),
        ),
      );
      const { runtimeId } = entryFile.markoOpts;
      const initExpression = t.callExpression(
        t.identifier("init"),
        runtimeId ? [t.stringLiteral(runtimeId)] : [],
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
