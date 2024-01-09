import { type Tag, assertNoParams, assertNoVar } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import { ReserveType, reserveScope } from "../util/reserve";
import { callRuntime } from "../util/runtime";
import { getOrCreateSection, getSection } from "../util/sections";
import {
  initContextProvider,
  writeHTMLResumeStatements,
} from "../util/signals";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import customTag from "../visitors/tag/custom-tag";

export default {
  analyze: {
    enter(tag) {
      reserveScope(
        ReserveType.Visit,
        getOrCreateSection(tag),
        tag.node,
        "put",
        "#text",
      );
      customTag.analyze.enter(tag);
    },
    exit(tag) {
      customTag.analyze.exit(tag);
    },
  },
  translate: {
    enter(tag) {
      const { node } = tag;
      const [defaultAttr] = node.attributes;

      if (!node.body.body.length) {
        throw tag.buildCodeFrameError(
          `The '<put>' tag requires body content that the context is forwarded through.`,
        );
      }

      if (!t.isMarkoAttribute(defaultAttr) || !defaultAttr.default) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The '<put>' tag requires default attribute like '<put=val>'.`,
          );
      }

      if (node.attributes.length > 1) {
        const start = node.attributes[1].loc?.start;
        const end = node.attributes[node.attributes.length - 1].loc?.end;
        const msg = `The '<put>' tag only supports a default attribute.`;

        if (start == null || end == null) {
          throw tag.get("name").buildCodeFrameError(msg);
        } else {
          throw tag.hub.buildError(
            { loc: { start, end } } as unknown as t.Node,
            msg,
            Error,
          );
        }
      }

      if (isOutputHTML()) {
        writer.flushBefore(tag);
        tag.insertBefore(
          t.expressionStatement(
            callRuntime(
              "pushContext",
              t.stringLiteral(tag.hub.file.metadata.marko.id),
              defaultAttr.value!,
            ),
          ),
        );
      } else {
        walks.visit(tag, walks.WalkCodes.Replace);
        walks.enterShallow(tag);

        const bodySection = getSection(tag.get("body"));
        const rendererId = writer.getRenderer(bodySection);

        initContextProvider(
          tag.hub.file.metadata.marko.id,
          node.extra.reserve!,
          defaultAttr.extra?.valueReferences,
          defaultAttr.value,
          rendererId,
        );
      }
    },
    exit(tag) {
      assertNoParams(tag);
      assertNoVar(tag);
      if (isOutputHTML()) {
        writer.flushInto(tag);
        writeHTMLResumeStatements(tag.get("body"));
        tag.insertAfter(t.expressionStatement(callRuntime("popContext")));
      }
      tag.replaceWithMultiple(tag.node.body.body);
    },
  },
  autocomplete: [
    {
      displayText: "put=<value>",
      description: "Sets a value which can be read from a child template.",
      snippet: "put=${1:value}",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#put",
    },
  ],
} as Tag;
