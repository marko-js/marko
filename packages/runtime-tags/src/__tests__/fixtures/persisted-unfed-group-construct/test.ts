import type { TestConfig } from "../../main.test";
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A group no call site feeds (a constant) still seeds a constructed child.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false },
    { show: true, a: "a" },
    click,
    { show: true, a: "b" },
  ],
};
