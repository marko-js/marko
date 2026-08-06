import type { TestConfig } from "../../main.test";

const clickFirst = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
const clickSecond = (document: Document) => {
  document.querySelectorAll<HTMLButtonElement>("button")[1]!.click();
};

// A ROOT-registered handler feeding constructs inside a loop binds
// through keyed hops: the reconstructed second item's control reports its
// own step through the live handler, proving per-key selection.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    clickFirst,
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    clickSecond,
  ],
};
