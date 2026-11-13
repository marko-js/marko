import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

// A `<let>` its own scope and the rows of a `<for to>` and a keyed `<for>` read: the
// scope a patch creates gets its fill, which renders all of them.
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
