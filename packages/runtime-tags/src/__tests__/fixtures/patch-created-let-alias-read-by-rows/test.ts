import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

// A `<let>` a loop's rows read through a `<const>` aliasing it: the scope a patch
// creates gets its fill, as where they read it by name.
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
