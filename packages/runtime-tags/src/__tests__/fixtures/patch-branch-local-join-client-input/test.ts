import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.n")!.click();
};

// A branch local from a server input joins an input a caller passes client
// state: the branch takes the local and inits the join where it is the client's.
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
