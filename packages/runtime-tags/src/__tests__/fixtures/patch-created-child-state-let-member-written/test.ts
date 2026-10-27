import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created child's `<let>` initialized from state takes its members from its
// init, with no write ahead of it that would leave its render skipped.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false, label: "a" }, { show: true, label: "b" }, click],
};
