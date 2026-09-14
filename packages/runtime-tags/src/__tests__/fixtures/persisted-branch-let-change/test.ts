import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A controllable branch let: its registered change handler rides the fresh
// seed, so a constructed branch's assignments route through the handler
// (display stays at the seed) exactly like a hydrated one.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    click,
    { title: "Store!", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    click,
  ],
};
