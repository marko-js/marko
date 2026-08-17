import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLAnchorElement>("a")!.click();

// Entry runs first, the streamed body lands after. The stateful placeholder
// resumes live (its lifecycles mount with their data), and the swap destroys
// it — its document listener must not keep stealing clicks from the body.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, flush, click],
};
