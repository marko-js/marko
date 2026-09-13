import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A middle template spreading its input into a nested child inside
// client-owned structure: the spread's provenance feeds every group the
// leaf may carry, so the text fills through both hops.
export const config: TestConfig = {
  persisted: true,
  steps: [{ text: "a" }, { text: "b" }, click, { text: "c" }, click],
};
