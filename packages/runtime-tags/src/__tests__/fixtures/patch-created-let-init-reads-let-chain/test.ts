import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A chain of `<let>` inits from a filled one: its fill runs each init, so the
// created scope takes no fill for the others.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, click],
};
