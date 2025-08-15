import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  diagnosticDeprecate,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import runtimeInfo from "../util/runtime-info";
import withPreviousLocation from "../util/with-previous-location";

export default {
  migrate: [
    (tag) => {
      assertNoArgs(tag);
      assertNoParams(tag);
      assertNoBodyContent(tag);
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
