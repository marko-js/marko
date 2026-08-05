import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A change handler passed ACROSS templates cannot re-bind on a construct;
// the bind entry names the ancestor slot holding the already-bound handler
// so the constructed branch copies it, and clicks reach the parent state.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    click,
  ],
};
