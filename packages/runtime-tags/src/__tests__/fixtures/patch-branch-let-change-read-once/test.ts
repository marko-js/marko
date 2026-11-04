import type { TestConfig } from "../../main.test";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A controlled `<let>`'s handler is read once per render on a patch page, as
// on a plain one, though its scope slot, bind, and fill's guard all use it:
// each render has its own `$global`, and a second read in one render throws.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: true, start: 5 }, click, { show: true, start: 7 }, click],
};
