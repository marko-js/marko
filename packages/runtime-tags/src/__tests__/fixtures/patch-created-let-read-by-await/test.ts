import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<let>` only an `<await>` body reads: the scope a patch creates gets its fill, which
// the body renders from once it settles.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, flush, click, { show: true }, flush],
};
