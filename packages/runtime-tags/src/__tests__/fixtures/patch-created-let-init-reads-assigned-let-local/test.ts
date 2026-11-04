import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A `<let>` whose init reads one the patch fills, and a local of it, both read by
// client code: the client runs the init, so the created scope seeds neither.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, a: "a" },
    { show: true, a: "b" },
    click,
    { show: true, a: "c" },
  ],
};
