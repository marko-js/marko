import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const input = (price: number) => ({
  $global: { persisted: true, price: `PR1CE${price}` },
});

// The dynamic-tag content path (how every route page renders inside its
// layout): the content branch is a sited, dispatched group whose anchor
// registers on the seed, so an identical navigation elides its fills.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input(111),
    navigate(input(111)),
    navigate(input(111), {
      mutateFrames(frames) {
        assert.ok(
          !frames.join("\n").includes("PR1CE"),
          "held content group re-shipped its value",
        );
        return frames;
      },
    }),
    navigate(input(222), {
      mutateFrames(frames) {
        assert.ok(
          frames.join("\n").includes("PR1CE222"),
          "changed content group did not ship",
        );
        return frames;
      },
    }),
    (document: Document) => {
      assert.equal(document.querySelector("p.info")!.textContent, "PR1CE222");
      assert.equal(
        document.querySelector("button.count")!.textContent,
        "clicked 0",
      );
    },
  ],
};
