import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A root fill read two branches deep delivers through the composed
// owner-to-branch dispatch chain: the server title updates the live hole.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, inner: true, title: "Store" },
    click,
    { show: true, inner: true, title: "Store!" },
    click,
    // The inner branch is destroyed in the same frame the fill changes:
    // the dispatch skips the dropped selection cleanly.
    { show: true, inner: false, title: "Store?" },
  ],
};
