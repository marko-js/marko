import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A `<let>` whose init reads a filled `<let>` and an input: the client runs the init,
// so the created scope takes no fill for it and its script runs once.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, a: "a" },
    { show: true, a: "b" },
    click,
    { show: true, a: "c" },
  ],
};
