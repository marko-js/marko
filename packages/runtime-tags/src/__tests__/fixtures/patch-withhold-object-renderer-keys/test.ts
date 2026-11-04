import type { TestConfig } from "../../main.test";

// A value a consumer may keep content in withholds only a renderer: a plain
// object carrying the renderer id and owner keys of the body below withholds
// nothing, so that body's fill ships only where Card keeps it.
const mode = {
  a: "a0",
  e: 99,
  id: "__tests__/template.marko_1*content",
  owner: 99,
};

export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, note: "a", mode },
    { on: false, note: "b", mode },
    { on: true, note: "c", mode },
  ],
};
