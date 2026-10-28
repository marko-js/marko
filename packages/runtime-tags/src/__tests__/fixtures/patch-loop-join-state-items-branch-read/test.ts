import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// The input a row joins is also read in a branch its caller's state opens:
// its fill ships past the rows, so its unpatched key re-runs the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { b: "m", items: ["u"], show: true },
    click("button.l"),
    { b: "n", items: ["u"], show: true },
    click("button.s"),
    { b: "o", items: ["v"], show: false },
    click("button.s"),
    { b: "w", items: ["v"], show: true },
  ],
};
