import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Static scriptlets are module-level code (shared, server-only, client-only):
// nothing about them is per render, so patches and constructs read them freely.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "hi", show: false },
    click,
    { title: "yo", show: true },
    click,
  ],
};
