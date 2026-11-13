import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<let>` only an `<if>` over a constant reads: the scope a patch creates gets its
// fill, which the branch renders from.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    click,
    { show: true },
    { show: false },
    { show: true },
  ],
};
