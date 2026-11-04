import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An `<await>` body reads its value destructured, in content of a tag whose
// params join client state: a flush's fill re-runs the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { first: "a1", second: "a2" },
    click,
    { first: "b1", second: "b2" },
    click,
  ],
};
