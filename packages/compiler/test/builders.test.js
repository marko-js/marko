import assert from "assert/strict";

import { types as t } from "@marko/compiler";

// The @babel/types patch writes each Marko builder by hand, so this checks
// them against the node definitions they restate.
describe("Marko node builders", () => {
  for (const type of t.FLIPPED_ALIAS_KEYS.Marko) {
    it(type, () => {
      const fields = t.NODE_FIELDS[type];
      const builder = t[type[0].toLowerCase() + type.slice(1)];
      assert.equal(t[type], builder);

      const node = builder();
      assert.deepEqual(
        Object.keys(node).sort(),
        ["type", ...Object.keys(fields)].sort(),
      );
      for (const key in fields) {
        const { default: value, optional } = fields[key];
        // As in Babel's builders, only a required field without a default
        // takes its argument as given.
        if (optional || value !== null) {
          assert.deepEqual(node[key], value, key);
          if (Array.isArray(value)) assert.notEqual(builder()[key], node[key]);
        }
      }

      const args = t.BUILDER_KEYS[type].map((key) => ({ key }));
      const built = builder(...args);
      for (const arg of args) assert.equal(built[arg.key], arg, arg.key);
    });
  }
});
