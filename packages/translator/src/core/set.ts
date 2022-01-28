import { types as t } from "@marko/compiler";
import { assertNoParams, assertNoVar, Tag } from "@marko/babel-utils";
import * as writer from "../util/writer";
import { callRuntime } from "../util/runtime";

export default {
  translate: {
    enter(tag) {
      writer.start(tag);

      const { node } = tag;
      const [defaultAttr] = node.attributes;

      if (!node.body.body.length) {
        throw tag.buildCodeFrameError(
          `The '<set>' tag requires body content that the context is forwarded through.`
        );
      }

      if (!t.isMarkoAttribute(defaultAttr) || !defaultAttr.default) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The '<set>' tag requires default attribute like '<set=val>'.`
          );
      }

      if (node.attributes.length > 1) {
        const start = node.attributes[1].loc?.start;
        const end = node.attributes[node.attributes.length - 1].loc?.end;
        const msg = `The '<set>' tag only supports a default attribute.`;

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

      tag.insertBefore(
        t.expressionStatement(
          callRuntime(
            tag,
            "pushContext",
            t.stringLiteral(tag.hub.file.metadata.marko.id),
            defaultAttr.value!
          )
        )
      );
    },
    exit(tag) {
      assertNoParams(tag);
      assertNoVar(tag);
      writer.end(tag);
      tag.insertAfter(t.expressionStatement(callRuntime(tag, "popContext")));
      tag.replaceWithMultiple(tag.node.body.body);
    },
  },
  autocomplete: [
    {
      displayText: "set=<value>",
      description: "Sets a value which can be read from a child template.",
      snippet: "set=${1:value}",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#set",
    },
  ],
} as Tag;
