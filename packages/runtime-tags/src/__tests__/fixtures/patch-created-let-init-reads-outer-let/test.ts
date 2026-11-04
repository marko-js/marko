import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button.y")!.click();

// A created branch's `<let>` whose init reads its parent's: the client runs the init
// from the parent's value, so the branch takes no fill for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { outer: true, show: false },
    { outer: true, show: true },
    click,
    { outer: false, show: false },
    { outer: true, show: true },
  ],
};
