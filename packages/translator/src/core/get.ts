import path from "path";
import { types as t } from "@marko/compiler";
import {
  resolveTagImport,
  getTemplateId,
  assertNoParams,
  Tag,
} from "@marko/babel-utils";
import * as writer from "../util/writer";
import { callRuntime } from "../util/runtime";
import { assertNoBodyContent } from "../util/assert";
import { isOutputHTML } from "../util/marko-config";
import { initContextConsumer } from "../util/signals";
import customTag from "../visitors/tag/custom-tag";
import { currentProgramPath } from "../visitors/program";
import { getOrCreateSectionId } from "../util/sections";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    closures?: boolean;
    contextProviders?: string[];
  }
}

export default {
  analyze: {
    enter(tag) {
      const sectionId = getOrCreateSectionId(tag);
      if (sectionId === 0) {
        (currentProgramPath.node.extra ??= {}).closures = true;
      }

      // TODO: resolve default parameter and push to (currentProgramPath.node.extra ??= {}).contextProviders

      customTag.analyze.enter(tag);

      // const {
      //   node,
      //   hub: { file },
      // } = tag;
      // if (file.markoOpts.output !== 'html') {
      //   const [defaultAttr] = node.attributes;

      //   if (defaultAttr === undefined) {
      //     const scriptlet = t.markoScriptlet([
      //       t.variableDeclaration("const", [
      //         t.variableDeclarator(
      //           node.var!,
      //           callRuntime("getInContext", t.stringLiteral('$'))
      //         ),
      //       ])
      //     ],false);

      //     tag.replaceWith(scriptlet);
      //   }
      // }
    },
    exit: customTag.analyze.exit,
  },
  translate(tag) {
    assertNoParams(tag);
    assertNoBodyContent(tag);

    if (isOutputHTML()) {
      writer.flushBefore(tag);
    }

    const {
      node,
      hub: { file },
    } = tag;
    const [defaultAttr] = node.attributes;
    let refId: string;

    if (!node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "<get> requires a variable to be defined, eg <get/NAME>."
        );
    }

    if (defaultAttr === undefined) {
      refId = "$";
    } else {
      if (
        !t.isMarkoAttribute(defaultAttr) ||
        !defaultAttr.default ||
        !t.isStringLiteral(defaultAttr.value)
      ) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The '<get>' tag requires default attribute that is a string that resolves to a Marko file like '<get/val="../file.marko">' or '<get/val="<tag-name>">'.`
          );
      }

      if (node.attributes.length > 1) {
        const start = node.attributes[1].loc?.start;
        const end = node.attributes[node.attributes.length - 1].loc?.end;
        const msg = `The '<get>' tag only supports a default attribute.`;

        if (start == null || end == null) {
          throw tag.get("name").buildCodeFrameError(msg);
        } else {
          throw tag.hub.buildError(
            { loc: { start, end } } as unknown as t.Node,
            msg,
            Error
          );
        }
      }

      const defaultAttrValue = tag
        .get("attributes")[0]
        .get("value") as t.NodePath<t.StringLiteral>;

      if (defaultAttr.value.value === ".") {
        // Self referencing `<get>`.
        refId = file.metadata.marko.id;
      } else {
        const relativeReferencePath = resolveTagImport(
          defaultAttrValue,
          defaultAttrValue.node.value
        );

        if (!relativeReferencePath) {
          throw defaultAttrValue.buildCodeFrameError(
            "Unable to resolve template provided to '<get>' tag."
          );
        }

        refId = getTemplateId(
          file.markoOpts.optimize,
          path.resolve(
            file.opts.filename as string,
            "..",
            relativeReferencePath
          )
        );
      }
    }

    if (isOutputHTML()) {
      tag.replaceWith(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            node.var,
            callRuntime("getInContext", t.stringLiteral(refId))
          ),
        ])
      );
    } else {
      const identifiers = Object.values(
        tag.get("var").getBindingIdentifiers()
      ) as t.Identifier[];

      // if (refId === '$') {
      //   const scriptlet = tag as unknown as t.NodePath<t.MarkoScriptlet>;
      //   addStatement(
      //     "render",
      //     getSectionId(scriptlet),
      //     scriptlet.node.extra?.bodyReferences as ReferenceGroup,
      //     scriptlet.node.body
      //   );
      // } else {
      initContextConsumer(refId, identifiers[0].extra!.reserve!);
      // }
      tag.remove();
    }
  },
  autocomplete: [
    {
      displayText: 'get/<name>="<from>"',
      description: "Gets a value provided from another template.",
      snippet: 'get/${1:name}="${2:from}"',
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#get",
    },
  ],
} as Tag;
