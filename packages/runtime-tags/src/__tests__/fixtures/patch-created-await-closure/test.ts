import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An `<await>` body a flush creates reads and follows an outer `<let>`.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, promise: Promise.resolve("x") },
    click,
    { show: true, promise: Promise.resolve("y") },
    click,
  ],
};
