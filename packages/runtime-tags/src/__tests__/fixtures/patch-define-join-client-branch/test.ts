import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A `<define>` body's written join renders in a branch its caller's state opens:
// client state creates it there, so the params' fills re-run the join.
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
