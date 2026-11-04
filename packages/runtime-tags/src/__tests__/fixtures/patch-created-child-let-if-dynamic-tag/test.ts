import type { TestConfig } from "../../main.test";

// A child a patch creates through a dynamic tag renders its `<if>` over a
// `<let>` on the client, and a later patch re-renders what it reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 0 },
    { on: true, n: 1 },
    { on: true, n: 2 },
    (d: Document) => d.querySelectorAll("button")[1].click(),
    { on: true, n: 3 },
  ],
};
