import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A created child's controlled `<let>` whose server-sourced handler is
// undefined: no closure init runs it, so its seed carries the default.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, click, { show: true }],
};
