import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".inc")!.click();
const hide = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".hide")!.click();

// A `@catch` with async content of its own streams as a reorder; removing the
// branch around the `<try>` must take its effects with it.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  steps: [{}, flush, flush, flush, inc, hide, inc],
};
