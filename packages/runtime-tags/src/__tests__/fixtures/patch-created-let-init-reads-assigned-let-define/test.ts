import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A `<define>` body a patch creates takes a `<let>` whose init reads one the patch
// fills: the client runs that init and the body's join, given the module constant.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, a: "a" },
    { show: true, a: "b" },
    click,
    { show: true, a: "c" },
  ],
};
