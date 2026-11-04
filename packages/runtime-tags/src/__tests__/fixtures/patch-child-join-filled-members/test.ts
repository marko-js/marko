import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A written join's inputs also render in a branch: their fills send them
// where the join runs on the client too, as a slot write would hide the change.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "p", show: true },
    click("button.n"),
    { x: "q", show: true },
    click("button.s"),
    click("button.s"),
    { x: "r", show: true },
  ],
};
