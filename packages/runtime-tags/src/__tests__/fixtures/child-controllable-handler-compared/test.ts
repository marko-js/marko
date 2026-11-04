import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.add")!.click();
};

// patch-child-controllable-handler-compared without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "a", show: true },
    { title: "b", show: false },
    { title: "b", show: true },
    click,
  ],
};
