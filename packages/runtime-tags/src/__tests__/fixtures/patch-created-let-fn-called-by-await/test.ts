import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function over a `<let>` an `<await>` body calls: the scope a patch creates gets the
// `<let>`'s fill, which builds the function the body renders from once it settles.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, flush, click, { show: true }, flush],
};
