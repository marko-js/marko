import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<try>` body a flush creates reads and follows an outer `<let>`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    click,
    { show: true, label: "b" },
    click,
  ],
};
