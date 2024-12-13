import { resolveRelativePath } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    isInteractive?: boolean;
    hasInteractiveChild?: boolean;
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
  build(entryFile: EntryFile) {
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
            `@marko/runtime-tags/${
              entryFile.markoOpts.optimize ? "" : "debug/"
            }dom`,
          ),
        ),
      );
      body.push(
        t.expressionStatement(t.callExpression(t.identifier("init"), [])),
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
    const { analyzedTags } = file.metadata.marko;
    state.imports.push(
      resolveRelativePath(entryFile, file.opts.filename as string),
    );
    state.init ||=
      file.path.node.extra.hasInteractiveChild ||
      file.path.node.extra.isInteractive ||
      false;

    for (const tag of analyzedTags || []) {
      visitChild(tag);
    }
  },
};
