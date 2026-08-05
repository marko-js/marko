import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const el = document.querySelector("input")!;
  el.value = "fresh";
  el.dispatchEvent(new document.defaultView!.Event("input", { bubbles: true }));
};

// A controllable inside a CONSTRUCTED branch: seeds land, the mount
// script attaches, and the handler reports after construction.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: false, value: "first" },
    { title: "Store!", show: true, value: "second" },
    type,
  ],
};
