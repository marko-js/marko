import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

// A child a patch creates holds a `<let>` only its loop's rows read: the child's scope
// gets its fill, so each row renders from it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    pickLast,
    { show: true },
    { show: false },
    { show: true },
  ],
};
