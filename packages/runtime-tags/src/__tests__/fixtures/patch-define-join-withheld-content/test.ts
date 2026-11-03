import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A written join in content its consumer withholds by caller state: the client
// renders that content itself, so the inputs' fills re-run the join there.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "p", y: "q" },
    click("button.m"),
    { x: "r", y: "s" },
    click("button.n"),
    { x: "t", y: "u" },
    click("button.m"),
    { x: "v", y: "w" },
    click("button.m"),
    { x: "a", y: "b" },
  ],
};
