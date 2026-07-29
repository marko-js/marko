import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const input = (label: number) => ({
  $global: { persisted: true, label: `L4BEL${label}` },
});

// A lazy component's group rides its ready batch whole: fills, effects,
// and the dispatch entry itself. When the module finally arrives, the
// parked batch must drain fills AND run its dispatch (a bare
// dependency-gate read of the [1, key, scopeId] entry would stall the
// batch forever). Value claims stand down until the page settles — see
// persisted-lazy-settle-claim — so holds engage only after the load.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input(1),
    navigate(input(1)),
    // Unsettled while the module is unloaded: the value re-ships rather
    // than being claimed as a possession the page cannot prove.
    navigate(input(1), {
      mutateFrames(frames) {
        assert.ok(
          frames.join("\n").includes("L4BEL1"),
          "unsettled lazy value was elided",
        );
        return frames;
      },
    }),
    // Miss while still unloaded: fills + dispatch park with the batch.
    navigate(input(2), {
      mutateFrames(frames) {
        assert.ok(
          frames.join("\n").includes("L4BEL2"),
          "missed lazy group did not ship",
        );
        return frames;
      },
    }),
    flushIdle,
    wait,
    (document: Document) => {
      assert.equal(document.querySelector("p.value")!.textContent, "L4BEL2");
    },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.tap")!.click(),
    (document: Document) => {
      assert.equal(document.querySelector("button.tap")!.textContent, "tap 1");
    },
    // Settled: the loaded group's claim now holds.
    navigate(input(2), {
      mutateFrames(frames) {
        assert.ok(
          !frames.join("\n").includes("L4BEL"),
          "settled lazy group re-shipped its value",
        );
        return frames;
      },
    }),
    (document: Document) => {
      assert.equal(document.querySelector("p.value")!.textContent, "L4BEL2");
      assert.equal(document.querySelector("button.tap")!.textContent, "tap 1");
    },
  ],
};
