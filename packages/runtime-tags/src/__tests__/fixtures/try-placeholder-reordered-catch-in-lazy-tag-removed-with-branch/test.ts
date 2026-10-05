import type { TestConfig } from "../../main.test";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".inc")!.click();
const hide = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".hide")!.click();

// In lazy content resumed before its module loads, the reordered `@catch` still
// joins the try's branch, so removing the branch takes it too.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  entry_delay: 5,
  load_order: ["child.marko.load.mjs"],
  steps: [{}, inc, hide, inc],
};
