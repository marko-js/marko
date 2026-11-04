import type { TestConfig } from "../../main.test";

// A destructured `<const>` a function passed to a child captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ v: { title: "a" } }, { v: { title: "b" } }, { v: { title: "b" } }],
};
