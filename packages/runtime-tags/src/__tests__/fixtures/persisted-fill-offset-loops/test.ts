import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Nested loops at DIFFERENT node offsets: the two hops carry distinct
// accessors, so a reversed dispatch order scans the wrong scope key.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      heading: "H",
      rows: [{ id: "r1", cells: ["a", "b"] }],
      suffix: "x",
    },
    click,
    {
      heading: "H",
      rows: [{ id: "r1", cells: ["b", "a"] }],
      suffix: "y",
    },
    click,
  ],
};
