import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Nested client-owned chains with a fill at each depth: both selections
// are the client's and both server values render fresh where revealed.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { outer: "o1", inner: "i1" },
    click,
    { outer: "o2", inner: "i2" },
    click,
    { outer: "o3", inner: "i3" },
    click,
  ],
};
