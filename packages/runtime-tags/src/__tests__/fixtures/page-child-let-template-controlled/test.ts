import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-page-child-let-template-controlled without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { big: false, label: "a" },
    { big: false, label: "b" },
    click,
    { big: true, label: "c" },
    { big: false, label: "d" },
  ],
};
