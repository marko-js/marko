import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client-owned chain nested inside another, with a fill at each depth:
// both selections are the client's, frames stay structure-silent, and
// both server values stay fresh through the owner-side dispatches.
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
