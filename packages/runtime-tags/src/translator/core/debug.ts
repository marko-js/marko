import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent, assertOnlyValueAttr } from "../util/assert";
import runtimeInfo from "../util/runtime-info";
import { ensureSection } from "../util/sections";
import { addSetupExpr, addSetupWork } from "../util/setup-work";
import { addTagStatement } from "../util/signals";
import { withPreviousLocation } from "../util/with-previous-location";

export default {
  analyze(tag) {
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    const valueAttr = assertOnlyValueAttr(tag);

    const section = ensureSection(tag);
    if (valueAttr) {
      addSetupExpr(section, valueAttr.value);
    } else {
      addSetupWork(section);
    }
  },
  translate: {
    exit(tag) {
      addTagStatement(
        tag,
        withPreviousLocation(t.debuggerStatement(), tag.node),
      );
    },
  },
  parseOptions: {
    openTagOnly: true,
  },
  attributes: {},
  autocomplete: [
    {
      description: "Debug on value change.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#debug",
    },
  ],
  types: runtimeInfo.name + "/tags/debug.d.marko",
} as Tag;
