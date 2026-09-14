import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Nested ifs at DIFFERENT node offsets: the two hops carry distinct
// accessors, so a reversed dispatch order looks up the wrong scope key.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, inner: true, title: "Store", heading: "H" },
    click,
    { show: true, inner: true, title: "Fresh", heading: "H" },
    click,
  ],
};
