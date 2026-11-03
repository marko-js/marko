import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A branch local with a fill of its own (content reads it alone) joins an input
// in content the caller may withhold: where live, it ships one entry.
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
