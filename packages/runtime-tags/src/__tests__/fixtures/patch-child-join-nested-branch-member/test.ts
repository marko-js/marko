import type { TestConfig } from "../../main.test";
const click = (d: Document) => d.querySelector<HTMLElement>("button")!.click();
// A written join's member a nested branch also reads, beside a client one:
// the scope inits the join, and the member's fill only sets the value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, x: "a" },
    { show: true, x: "b" },
    click,
    { show: true, x: "c" },
  ],
};
