import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".inc")!.click();
const hide = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".hide")!.click();

// The `<await>` streams into a hole in the `<try>` body's reorder; hiding the
// `<if>` around it must take its effects with it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, inc, hide, inc],
};
