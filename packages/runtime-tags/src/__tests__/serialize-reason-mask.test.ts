import * as assert from "assert/strict";

import type { types as t } from "@marko/compiler";

import { _serialize_guard } from "../html/writer";
import { buildGroupMask } from "../translator/util/serialize-guard";

// A call site's reason as the translator encodes it, read back per group as
// the html runtime reads it.
const cases: Record<string, (number | undefined)[]> = {
  "no fed group": [undefined, 0],
  "fifteen fed groups": Array(15).fill(1),
  "fifteen fed groups and a constant": [...Array(15).fill(1), 0],
  "a fed first group and a constant seventeenth": [1, ...Array(16).fill(0)],
  "a fed group past fifteen": [...Array(15).fill(0), 1, 0],
};

describe("runtime-tags/serialize reason mask", () => {
  for (const [name, values] of Object.entries(cases)) {
    it(name, () => {
      const reason = evaluate(
        buildGroupMask(values.map((value) => ({ value, names: "" }))),
      );
      assert.deepEqual(
        values.map((_, group) => _serialize_guard(reason, group)),
        values.map((value) => (value ? 1 : 0)),
      );
    });
  }
});

function evaluate(node: t.Expression | undefined) {
  if (!node) return undefined;
  if (node.type === "NumericLiteral") return node.value;
  if (node.type === "ObjectExpression") {
    return Object.fromEntries(
      node.properties.map((prop) => {
        const { key, value } = prop as t.ObjectProperty;
        return [
          (key as t.NumericLiteral).value,
          (value as t.NumericLiteral).value,
        ];
      }),
    );
  }
  throw new Error(`Unexpected encoded reason: ${node.type}`);
}
