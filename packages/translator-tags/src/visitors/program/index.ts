import path from "path";
import { loadFileForImport, resolveRelativePath } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { bindingHasDownstreamExpressions } from "../../util/binding-has-downstream-expressions";
import entryBuilder from "../../util/entry-builder";
import {
  getMarkoOpts,
  isOutputDOM,
  isOutputHTML,
} from "../../util/marko-config";
import {
  BindingType,
  finalizeReferences,
  trackParamsReferences,
  type Binding,
} from "../../util/references";
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
      trackParamsReferences(program, BindingType.input);
      const { scope } = program;
      // TODO: make any exports undefined if they are noops/empty
      (program.node.extra ??= {}).domExports = {
        template: scope.generateUid("template_"),
        walks: scope.generateUid("walks_"),
        setup: scope.generateUid("setup_"),
        params: undefined, // TODO look into recursive components with fine grained params.
        closures: scope.generateUid("closures_"),
      };
    },

    exit(program: t.NodePath<t.Program>) {
      finalizeReferences();
      const {
        scope,
        node: { extra },
      } = program;

      if (extra.binding && bindingHasDownstreamExpressions(extra.binding)) {
        extra.domExports!.params = recurseAndBuildExportTree(
          extra.binding!,
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
  const { aliases, propertyAliases, downstreamExpressions } = binding;

  if (!downstreamExpressions.size) {
    exportTree.props = {};
    for (const [property, alias] of propertyAliases) {
      exportTree.props[property] = recurseAndBuildExportTree(alias, scope);
    }

    for (const alias of aliases) {
      // TODO: handle spreads
      const exports = recurseAndBuildExportTree(alias, scope);
      if (exports.props) {
        // TODO: this allows one alias to overwrite another
        exportTree.props = { ...exportTree.props, ...exports.props };
      } else {
        exportTree.props = undefined;
        return exportTree;
      }
    }
  }

  return exportTree;
}
