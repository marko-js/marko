import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// patch-capture-branch-withheld-join without patches.
export const config: TestConfig = {
  equivalent: false,
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
