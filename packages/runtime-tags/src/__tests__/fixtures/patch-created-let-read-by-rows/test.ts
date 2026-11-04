import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

// A `<let>` only the rows of a loop over a constant read: the scope a patch creates
// gets its fill, so each row renders from it as a client render's do.
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
