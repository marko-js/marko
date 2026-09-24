import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  diagnosticDeprecate,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoSpreadAttrs } from "../util/assert";
import runtimeInfo from "../util/runtime-info";
import withPreviousLocation from "../util/with-previous-location";

export default {
  migrate: [
    (tag) => {
      // `<script>` reads its body as code only when parsed, so renaming the
      // source is the fix; migrating this tag would still reject the body.
      if (tag.node.body.body.length) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "The `<effect>` tag has been replaced by [`<script>`](https://markojs.com/docs/reference/core-tag#script), which runs its body as code. Rename it to `<script>`.",
          );
      }
      assertNoArgs(tag);
      assertNoParams(tag);
      assertNoAttributeTags(tag);
      assertNoSpreadAttrs(tag);
      assertAllowedAttributes(tag, ["value"]);
      diagnosticDeprecate(tag, {
        label: "The 'effect' tag has been replaced by the 'script' tag.",
        fix() {
          const { node } = tag;
          tag.replaceWith(
            t.markoTag(
              withPreviousLocation(t.stringLiteral("script"), node.name),
              node.attributes,
              node.body,
              node.arguments,
              node.var,
              node.attributeTags,
            ),
          );
        },
      });
    },
  ],
  attributes: {},
  types: runtimeInfo.name + "/tags/effect.d.marko",
} as Tag;
