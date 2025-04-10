import { types as t } from "@marko/compiler";
import {
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import path from "path";

import { bindingHasDownstreamExpressions } from "../../util/binding-has-downstream-expressions";
import entryBuilder from "../../util/entry-builder";
import { generateUid, generateUidIdentifier } from "../../util/generate-uid";
import {
  getMarkoOpts,
  isOutputDOM,
  isOutputHTML,
} from "../../util/marko-config";
import { findIndexSorted } from "../../util/optional";
import {
  type Binding,
  BindingType,
  compareSerializeReasons,
  finalizeReferences,
  trackParamsReferences,
} from "../../util/references";
import { getCompatRuntimeFile } from "../../util/runtime";
import { startSection } from "../../util/sections";
import type {
  DynamicSerializeReason,
  DynamicSerializeReasons,
} from "../../util/serialize-reasons";
import type { TemplateVisitor } from "../../util/visitors";
import programDOM from "./dom";
import programHTML from "./html";

export let cleanIdentifier: t.Identifier;
export let scopeIdentifier: t.Identifier;
export function isScopeIdentifier(node: t.Node): node is t.Identifier {
  return node === scopeIdentifier;
}

export type TemplateExport = {
  id: string;
  binding: Binding;
  props: { [prop: string]: TemplateExport } | undefined;
};
export type TemplateExports = TemplateExport["props"];

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    inputSerializeReasons?: DynamicSerializeReasons;
    domExports?: {
      template: string;
      walks: string;
      setup: string;
      input: TemplateExport | undefined;
    };
  }
}

export default {
  migrate: {
    enter(program) {
      program.node.params = [t.identifier("input")];
    },
    exit(program) {
      program.scope.crawl();
    },
  },
  analyze: {
    enter(program) {
      startSection(program);
      trackParamsReferences(program, BindingType.input);

      const programExtra = (program.node.extra ??= {});
      const inputBinding = program.node.params[0].extra?.binding;
      if (inputBinding) {
        inputBinding.nullable = false;
      }

      // TODO: make any exports undefined if they are noops/empty
      programExtra.domExports = {
        template: generateUid("template"),
        walks: generateUid("walks"),
        setup: generateUid("setup"),
        input: undefined, // TODO look into recursive components with fine grained params.
      };
    },

    exit(program) {
      finalizeReferences();
      const programExtra = program.node.extra;
      const inputBinding = program.node.params[0].extra?.binding;
      if (inputBinding && bindingHasDownstreamExpressions(inputBinding)) {
        programExtra.domExports!.input = buildTemplateExports(
          inputBinding,
          program,
        );
      }
    },
  },
  translate: {
    enter(program) {
      scopeIdentifier = isOutputDOM()
        ? generateUidIdentifier("scope")
        : (null as any as t.Identifier);
      cleanIdentifier = isOutputDOM()
        ? generateUidIdentifier("clean")
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
    exit(program) {
      if (isOutputHTML()) {
        programHTML.translate.exit(program);
      } else {
        programDOM.translate.exit(program);
      }

      if (program.node.extra?.needsCompat) {
        const compatFile = getCompatRuntimeFile();
        const body: [undefined | t.Statement, ...t.Statement[]] = [undefined];

        for (const child of program.node.body) {
          if (
            child.type === "ImportDeclaration" &&
            child.source.value === compatFile
          ) {
            body[0] = child;
          } else {
            body.push(child);
          }
        }

        body[0] ??= t.importDeclaration([], t.stringLiteral(compatFile));
        program.node.body = body as t.Statement[];
      }
    },
  },
} satisfies TemplateVisitor<t.Program>;

export function resolveSerializeReasonId(
  inputSerializeReasons: DynamicSerializeReasons,
  reason: DynamicSerializeReason,
) {
  const id = findIndexSorted(
    compareSerializeReasons,
    inputSerializeReasons,
    reason,
  );

  if (id === -1) {
    throw new Error("Unable to resolve serialize reason against input");
  }

  return id;
}

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

function buildTemplateExports(
  binding: Binding,
  program: t.NodePath<t.Program>,
) {
  const templateExport: TemplateExport = {
    id: (binding.export ??= generateUid(binding.name)),
    binding,
    props: undefined,
  };
  if (!(binding.aliases.size || binding.downstreamExpressions.size)) {
    templateExport.props = {};
    for (const [property, alias] of binding.propertyAliases) {
      templateExport.props[property] = buildTemplateExports(alias, program);
    }
  }

  return templateExport;
}
