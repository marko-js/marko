import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A branch local a script reads joins an input in content the caller may
// withhold: where live, its one entry re-runs the join and the script.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "p", y: "q", show: true },
    { x: "r", y: "s", show: true },
    click("button.m"),
    click("button.n"),
    { x: "t", y: "u", show: true },
    click("button.m"),
    { x: "v", y: "w", show: true },
    click("button.m"),
  ],
};
