import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<try>` body a flush creates seeds its `<let>` and runs its handler.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, click],
};
