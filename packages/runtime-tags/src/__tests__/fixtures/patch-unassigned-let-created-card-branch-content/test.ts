import type { TestConfig } from "../../main.test";

// A created card's branch an unassigned `<let>` selects holds content and a child reading
// changing input: a later patch fills both.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 1, w: "a" },
    { on: true, n: 1, w: "b" },
    { on: true, n: 1, w: "c" },
  ],
};
