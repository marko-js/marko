import * as assert from "assert/strict";

import * as prodAccessor from "../common/accessor";
import * as debugAccessor from "../common/accessor.debug";

// `accessor.ts` and `accessor.debug.ts` are hand-maintained twins: the
// build/test tooling swaps one for the other by filename, but nothing verifies
// they stay in sync. Runtime code imports only the `.debug` variant, so
// TypeScript never type-checks the production file. A member that drifts (or a
// duplicate value that collides two scope keys) corrupts resume/hydration and
// only in optimized builds, so assert parity explicitly here rather than
// relying on a fixture happening to exercise the affected accessor.

type AnyEnum = Record<string, string>;

describe("runtime-tags/debug parity", () => {
  describe("accessor.ts <-> accessor.debug.ts", () => {
    it("export the same set of enums", () => {
      assert.deepEqual(
        Object.keys(prodAccessor).sort(),
        Object.keys(debugAccessor).sort(),
      );
    });

    for (const enumName of Object.keys(debugAccessor)) {
      const prodEnum = (prodAccessor as Record<string, AnyEnum>)[enumName];
      const debugEnum = (debugAccessor as Record<string, AnyEnum>)[enumName];

      describe(enumName, () => {
        it("has identical member names across both variants", () => {
          assert.deepEqual(
            Object.keys(prodEnum ?? {}).sort(),
            Object.keys(debugEnum).sort(),
          );
        });

        it("has unique production values (no scope-key collisions)", () => {
          const values = Object.values(prodEnum ?? {});
          assert.equal(new Set(values).size, values.length);
        });

        it("has unique debug values", () => {
          const values = Object.values(debugEnum);
          assert.equal(new Set(values).size, values.length);
        });
      });
    }
  });
});
