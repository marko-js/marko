import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function over a `<let>` an `<if>` over a constant calls: the scope a patch creates
// gets the `<let>`'s fill, which builds the function the branch renders from.
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
