import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch's value content a client loop keeps reads, also captured by a function a
// child's effect calls: the kept rows and the effect see each change.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: true, show: true },
    { on: true, show: false },
    click,
    { on: true, show: true },
    click,
  ],
};
