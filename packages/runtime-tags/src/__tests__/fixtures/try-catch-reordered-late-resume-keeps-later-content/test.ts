import type { TestConfig } from "../../main.test";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".inc")!.click();
const hide = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".hide")!.click();

// Resume starts after the reordered `@catch` and later content streamed: hiding
// the `<try>` must leave the content after it live.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  entry_delay: 6,
  steps: [{}, inc, hide, inc],
};
