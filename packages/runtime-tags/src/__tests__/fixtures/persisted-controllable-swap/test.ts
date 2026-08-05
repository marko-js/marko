import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const el = document.querySelector("input")!;
  el.value = "hi";
  el.dispatchEvent(new document.defaultView!.Event("input", { bubbles: true }));
};

// The handler IDENTITY swaps between frames: the bind entry re-installs
// the CURRENT registration, so post-swap input reports uppercased.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", value: "first", big: false },
    { title: "Store!", value: "second", big: true },
    type,
  ],
};
