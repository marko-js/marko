import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".inc")!.click();
const hide = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".hide")!.click();

// With a `@placeholder` body reordering under the try's id, the `@catch` reorders
// under its own; removing the branch around the `<try>` must take it too.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, inc, hide, inc],
};
