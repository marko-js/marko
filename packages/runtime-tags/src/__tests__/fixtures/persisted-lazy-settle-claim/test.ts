import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const input = (label: number) => ({
  $global: { persisted: true, label: `L4BEL${label}` },
});

// A claim is a possession statement: it must not commit while the lazy
// batch that carries the content is still parked behind an unloaded
// module. Otherwise: navigate to changed content (parks), navigate to the
// SAME content again before the module loads (discards the parked batch,
// echoes the claim), and the server holds a group the live DOM never
// received — permanent stale UI from an honest client.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input(1),
    // Seed claims while the module is still unloaded: L2's fills and
    // dispatch park with the ready batch.
    navigate(input(2), {
      mutateFrames(frames) {
        assert.ok(
          frames.join("\n").includes("L4BEL2"),
          "missed lazy group did not ship",
        );
        return frames;
      },
    }),
    // Same target again BEFORE the module loads: the parked batch is
    // discarded, so the unsettled claim must not have committed — the
    // value must ship again.
    navigate(input(2), {
      mutateFrames(frames) {
        assert.ok(
          frames.join("\n").includes("L4BEL2"),
          "unsettled lazy claim was committed: content elided while never applied",
        );
        return frames;
      },
    }),
    flushIdle,
    wait,
    (document: Document) => {
      assert.equal(document.querySelector("p.value")!.textContent, "L4BEL2");
    },
    // A SETTLED claim still holds: after the module loaded and the batch
    // drained, the same navigation elides.
    navigate(input(2), {
      mutateFrames(frames) {
        assert.ok(
          !frames.join("\n").includes("L4BEL"),
          "settled lazy claim did not hold",
        );
        return frames;
      },
    }),
    (document: Document) => {
      assert.equal(document.querySelector("p.value")!.textContent, "L4BEL2");
    },
  ],
};
