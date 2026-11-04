import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A child's written join sits in a branch its caller's state opens: client
// state creates that branch, so its inputs' fills re-run the join there.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "a", y: "p" },
    click("button.s"),
    { x: "b", y: "q" },
    click("button.c"),
    { x: "c", y: "r" },
  ],
};
