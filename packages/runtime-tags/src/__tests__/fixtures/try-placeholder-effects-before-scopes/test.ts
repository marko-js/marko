import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLAnchorElement>("a")!.click();

// Entry runs first, the streamed body lands after. The placeholder flush
// registers the placeholder content's effects but holds its scopes for
// the body flush, so `child` mounts against an empty scope (undefined
// input) and nothing under the placeholder is ever destroyed on the swap.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, flush, click],
};
