import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const el = document.querySelector<HTMLInputElement>("input")!;
  el.value = "typed";
  el.dispatchEvent(new (el.ownerDocument.defaultView as any).Event("input"));
};

// A spread beside a controllable value: the spread patches as an attribute
// set while the client keeps its controlled value.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { attrs: { placeholder: "p1" } },
    { attrs: { placeholder: "p2" } },
    type,
    { attrs: { placeholder: "p3", "data-x": 1 } },
  ],
};
