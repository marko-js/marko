import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A 3-deep mixed chain (if → if → for): the fill dispatches through two
// conditional hops and a keyed loop hop, including same-frame destroy.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, inner: true, items: ["a", "b"], suffix: "x" },
    click,
    { show: true, inner: true, items: ["b", "a"], suffix: "y" },
    click,
    // The whole chain is destroyed in the frame the fill changes.
    { show: true, inner: false, items: ["b", "a"], suffix: "z" },
  ],
};
