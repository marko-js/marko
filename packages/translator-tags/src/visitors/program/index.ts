import path from "path";
import { loadFileForImport, resolveRelativePath } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import entryBuilder from "../../util/entry-builder";
import {
  getMarkoOpts,
  isOutputDOM,
  isOutputHTML,
} from "../../util/marko-config";
import {
  BindingType,
  createBinding,
  finalizeReferences,
  trackReferencesForBinding,
  type Binding,
} from "../../util/references";
import { startSection } from "../../util/sections";
import { initValue } from "../../util/signals";
import programDOM from "./dom";
import programHTML from "./html";

export let currentProgramPath: t.NodePath<t.Program>;
export let scopeIdentifier: t.Identifier;
export let cleanIdentifier: t.Identifier;

const previousProgramPath: WeakMap<
  t.NodePath<t.Program>,
  t.NodePath<t.Program> | undefined
> = new WeakMap();

type ParamsExports = {
  id: string;
  props: { [prop: string]: ParamsExports } | undefined;
};
declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    domExports?: {
      template: string;
      walks: string;
      setup: string;
      params: ParamsExports | undefined;
      closures: string;
    };
  }
}

export default {
  migrate: {
    enter(program: t.NodePath<t.Program>) {
      previousProgramPath.set(program, currentProgramPath);
      program.node.params = [t.identifier("input")];
      currentProgramPath = program;
    },
    exit() {
      currentProgramPath.scope.crawl();
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
  analyze: {
    enter(program: t.NodePath<t.Program>) {
      previousProgramPath.set(program, currentProgramPath);
      currentProgramPath = program;
      const section = startSection(program)!;

      const babelInputBinding = program.scope.getBinding("input")!;
      let inputBinding: Binding | undefined = undefined;
      if (
        babelInputBinding.referencePaths.length ||
        babelInputBinding.constantViolations.length
      ) {
        inputBinding = (babelInputBinding.identifier.extra ??= {}).binding =
          createBinding("input", BindingType.input, section);
        trackReferencesForBinding(babelInputBinding);
      }
      const { extra } = program.node;
      const { scope } = program;
      extra.domExports = {
        template: scope.generateUid("template_"),
        walks: scope.generateUid("walks_"),
        setup: scope.generateUid("setup_"),
        params: inputBinding && {
          id: scope.generateUid("args_"),
          props: {
            0: {
              id: (inputBinding.export ??= scope.generateUid(
                inputBinding.name + "_",
              )),
              props: undefined,
            },
          },
        },
        closures: scope.generateUid("closures_"),
      };
    },

    exit(program: t.NodePath<t.Program>) {
      finalizeReferences();
      const {
        scope,
        node: {
          extra,
          params: [{ extra: inputExtra }],
        },
      } = program;

      if (inputExtra?.binding) {
        extra.domExports!.params!.props![0] = recurseAndBuildExportTree(
          inputExtra.binding,
          scope,
        );
      }
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
  translate: {
    enter(program: t.NodePath<t.Program>) {
      previousProgramPath.set(program, currentProgramPath);
      currentProgramPath = program;
      scopeIdentifier = isOutputDOM()
        ? program.scope.generateUidIdentifier("scope")
        : (null as any as t.Identifier);
      cleanIdentifier = isOutputDOM()
        ? program.scope.generateUidIdentifier("clean")
        : (null as any as t.Identifier);
      if (getMarkoOpts().output === "hydrate") {
        const entryFile = program.hub.file;
        const visitedFiles = new Set([
          resolveRelativePath(entryFile, entryFile.opts.filename as string),
        ]);
        entryBuilder.visit(entryFile, entryFile, function visitChild(resolved) {
          if (!visitedFiles.has(resolved)) {
            visitedFiles.add(resolved);
            const file = loadFileForImport(entryFile, resolved);
            if (file) {
              entryBuilder.visit(file, entryFile, (id) =>
                visitChild(resolveRelativeToEntry(entryFile, file, id)),
              );
            }
          }
        });

        program.node.body = entryBuilder.build(entryFile);
        program.skip();
        return;
      }

      const inputBinding = program.node.params[0].extra?.binding;
      if (inputBinding) {
        initValue(inputBinding);
      }
    },
    exit(program: t.NodePath<t.Program>) {
      if (isOutputHTML()) {
        programHTML.translate.exit(program);
      } else {
        programDOM.translate.exit(program);
      }
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
};

function resolveRelativeToEntry(
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

function recurseAndBuildExportTree(binding: Binding, scope: t.Scope) {
  const exportTree: ParamsExports = {
    id: (binding.export ??= scope.generateUid(binding.name + "_")),
    props: undefined,
  };
  const { downstreamAliases, downstreamExpressions } = binding;
  const nonAliasExpressions = new Set(downstreamExpressions);
  for (const alias of downstreamAliases.keys()) {
    nonAliasExpressions.delete(alias.upstreamExpression!);
  }
  if (!nonAliasExpressions.size) {
    exportTree.props = {};
    for (const [binding, property] of downstreamAliases) {
      if (Array.isArray(property)) {
        exportTree.props[property[property.length - 1]] =
          recurseAndBuildExportTree(binding, scope);
      } else {
        exportTree.props[property!] = recurseAndBuildExportTree(binding, scope);
      }
    }
  }
  return exportTree;
}
