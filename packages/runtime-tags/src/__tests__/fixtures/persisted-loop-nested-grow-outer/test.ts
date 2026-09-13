import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An inner hole reads the OUTER loop's item beside state: the outer item
// partial writes it before the inner loop, so a constructed row paints.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { rows: [{ id: "r1", cells: ["a"] }] },
    click,
    {
      rows: [
        { id: "r1", cells: ["a"] },
        { id: "r2", cells: ["c"] },
      ],
    },
  ],
};
