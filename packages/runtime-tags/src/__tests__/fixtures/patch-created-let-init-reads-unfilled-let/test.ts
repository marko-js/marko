import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A `<let>` whose init reads one no patch fills: nothing runs its init on the client,
// so the created scope takes its fill.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, click],
};
