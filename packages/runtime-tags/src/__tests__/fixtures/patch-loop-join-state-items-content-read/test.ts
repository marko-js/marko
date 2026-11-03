import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// The input a row joins is also read in content a consumer may withhold:
// its fill ships past the rows, so its unpatched key re-runs the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { b: "m" },
    click("button.l"),
    { b: "n" },
    click("button.m"),
    { b: "o" },
    click("button.m"),
    { b: "w" },
  ],
};
