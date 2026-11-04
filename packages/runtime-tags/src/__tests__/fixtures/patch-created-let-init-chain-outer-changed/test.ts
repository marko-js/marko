import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button.x")!.click();

// A created branch's `<let>` whose init reads one that reads the page's changed `<let>`:
// neither starts from the server's value, so the branch shows the client's.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, click, { show: true }],
};
