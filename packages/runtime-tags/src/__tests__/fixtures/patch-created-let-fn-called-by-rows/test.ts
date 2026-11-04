import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

// A function over a `<let>` a loop's rows call: the scope a patch creates gets the
// `<let>`'s fill, from which main's `_const` builds the function before the rows render.
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
