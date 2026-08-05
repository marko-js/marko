import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A derived const between the state and the closure: a construct paints
// the current derived value even when nothing recomputed it client-side
// yet (branch hidden at hydration, shown by the first patch).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: false },
    { title: "Store", show: true },
    click,
    { title: "Store!", show: true },
  ],
};
