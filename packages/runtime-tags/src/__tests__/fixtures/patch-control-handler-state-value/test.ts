import type { TestConfig } from "../../main.test";

const click = (document: Document) => document.querySelector("button")!.click();
const type = (document: Document) => {
  const el = document.querySelector("input")!;
  el.value = "typed";
  el.dispatchEvent(new document.defaultView!.Event("input", { bubbles: true }));
};

// A controlled input whose value reads client state, with a handler reading
// nothing: client code sets both, created or paired, so a patch writes neither.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { n: 1, show: false },
    click,
    { n: 2, show: true },
    type,
    click,
    { n: 3, show: true },
    type,
  ],
};
