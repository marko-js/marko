import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const show = (document: Document) =>
  document.querySelector<HTMLButtonElement>("#show")!.click();
const inner = (document: Document) =>
  document.querySelector<HTMLButtonElement>("#inner")!.click();

// Content the client creates in a `<try>` still streaming from the server
// runs its effects once the streamed content swaps in.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, show, flush, wait, inner],
};
