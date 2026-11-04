import type { TestConfig } from "../../main.test";

// The await may not have resolved when the click comes, leaving no button.
const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")?.click();

// patch-created-child-await-let-content without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
