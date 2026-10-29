import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-page-child-let-define-label-assigned without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: true, label: "c" },
    click,
    { more: true, label: "d" },
  ],
};
