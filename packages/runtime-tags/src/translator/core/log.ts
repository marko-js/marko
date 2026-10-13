import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent, assertValueAttr } from "../util/assert";
import runtimeInfo from "../util/runtime-info";
import { ensureSection } from "../util/sections";
import { addSetupExpr } from "../util/setup-work";
import { addTagStatement } from "../util/signals";

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    const valueAttr = assertValueAttr(tag, true);

    addSetupExpr(ensureSection(tag), valueAttr.value);
  },
  translate: {
    exit(tag) {
      addTagStatement(
        tag,
        t.expressionStatement(
          t.callExpression(
            t.memberExpression(t.identifier("console"), t.identifier("log")),
            [tag.node.attributes[0].value],
          ),
        ),
      );
    },
  },
  parseOptions: {
    openTagOnly: true,
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to log a value to the console.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#log",
    },
  ],
  types: runtimeInfo.name + "/tags/log.d.marko",
} as Tag;
