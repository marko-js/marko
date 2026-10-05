import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".inc")!.click();
const hide = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".hide")!.click();

// The `@catch` streams as a reorder once the body streamed; removing the branch
// around the `<try>` must take the catch's effects with it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, inc, hide, inc],
};
