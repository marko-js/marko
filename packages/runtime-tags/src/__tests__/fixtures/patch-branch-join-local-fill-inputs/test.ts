import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.n")!.click();
};

// A branch joins two inputs its locals with fills derive from: where a caller
// passes one client state, the kept branch still inits the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "p", y: "q", show: true },
    click,
    { x: "r", y: "s", show: true },
    click,
    { x: "t", y: "u", show: true },
  ],
};
