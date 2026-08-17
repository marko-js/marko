import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An inner hole reads the OUTER loop's item beside state: a constructed
// outer row never seeds it, so no shell ships and the growth fails closed.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
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
