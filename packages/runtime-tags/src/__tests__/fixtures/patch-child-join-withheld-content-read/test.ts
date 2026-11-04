import type { TestConfig } from "../../main.test";
const click = (s: string) => (d: Document) =>
  d.querySelector<HTMLElement>(s)!.click();
// A written join's input is also read in content a consumer may withhold:
// its fill key still ships that content, which has no key of its own.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "a", y: "b" },
    { x: "c", y: "d" },
    click("button.m"),
    { x: "e", y: "f" },
    click("button.m"),
    click("button.n"),
    { x: "g", y: "h" },
  ],
};
