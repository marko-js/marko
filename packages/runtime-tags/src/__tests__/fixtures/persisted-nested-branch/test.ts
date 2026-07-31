import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, detail: true, kind: "a", text: "one" },
    { show: true, detail: true, kind: "b", text: "two" },
    // Inner branch flips while the outer matches: the patch must fail.
    { show: true, summary: "condensed" },
  ],
};
