import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Two server attrs feeding two child param groups: both fills re-apply
// through their own appliers, fresh at reveal after any patches.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "t1", body: "b1" },
    { title: "t2", body: "b2" },
    toggle,
    { title: "t3", body: "b3" },
  ],
};
