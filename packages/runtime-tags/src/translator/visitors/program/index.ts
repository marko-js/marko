import { types as t } from "@marko/compiler";
import {
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import path from "path";

import {
  type BindingPropTree,
  getBindingPropTree,
} from "../../util/binding-prop-tree";
import entryBuilder from "../../util/entry-builder";
import { generateUid, generateUidIdentifier } from "../../util/generate-uid";
import { getKnownAttrValues } from "../../util/get-known-attr-values";
import { isCoreTagName } from "../../util/is-core-tag";
import {
  getMarkoOpts,
  isOutputDOM,
  isOutputHTML,
} from "../../util/marko-config";
import {
  BindingType,
  finalizeReferences,
  type Sources,
  trackParamsReferences,
} from "../../util/references";
import { getCompatRuntimeFile } from "../../util/runtime";
import { startSection } from "../../util/sections";
import type { TemplateVisitor } from "../../util/visitors";
import programDOM from "./dom";
import programHTML from "./html";
import { preAnalyze } from "./pre-analyze";

export type ParamSerializeReason = NonNullable<Sources["param"]>;
export interface ParamSerializeReasonGroup {
  id: symbol;
  reason: ParamSerializeReason;
}
export type ParamSerializeReasonGroups = [
  ParamSerializeReasonGroup,
  ...ParamSerializeReasonGroup[],
];

export let scopeIdentifier: t.Identifier;
export function isScopeIdentifier(node: t.Node): node is t.Identifier {
  return node === scopeIdentifier;
}

export type TemplateExports = BindingPropTree["props"];

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    returnValueExpr?: t.NodeExtra;
    domExports?: {
      template: string;
      walks: string;
      setup: string;
      params: BindingPropTree | undefined;
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
  transform: {
    exit: preAnalyze,
  },
  analyze: {
    enter(program) {
      startSection(program);
      trackParamsReferences(program, BindingType.input);

      const programExtra = (program.node.extra ??= {});
      const inputBinding = program.node.params![0].extra?.binding;
      if (inputBinding) {
        inputBinding.nullable = false;
      }

      // TODO: make any exports undefined if they are noops/empty
      programExtra.domExports = {
        template: generateUid("template"),
        walks: generateUid("walks"),
        setup: generateUid("setup"),
        params: undefined,
      };

      for (const child of program.get("body")) {
        if (isCoreTagName(child, "return")) {
          const { value } = getKnownAttrValues(child.node);
          if (value) {
            programExtra.returnValueExpr = value.extra ??= {};
          }

          break;
        }
      }
    },

    exit(program) {
      finalizeReferences();
      const programExtra = program.node.extra!;
      const paramsBinding = programExtra.binding;
      if (paramsBinding && !paramsBinding.pruned) {
        programExtra.domExports!.params = getBindingPropTree(paramsBinding);
      }
    },
  },
  translate: {
    enter(program) {
      scopeIdentifier = isOutputDOM()
        ? generateUidIdentifier("scope")
        : (null as any as t.Identifier);
      if (getMarkoOpts().output === "hydrate") {
        const entryFile = program.hub.file;
        const visitedFiles = new Set([
          resolveRelativePath(entryFile, entryFile.opts.filename),
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
      if (isOutputHTML()) {
        programHTML.translate.enter();
      } else {
        programDOM.translate.enter(program);
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
