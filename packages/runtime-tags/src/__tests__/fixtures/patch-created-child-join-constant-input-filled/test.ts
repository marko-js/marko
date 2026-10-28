import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.n")!.click();
};

// As patch-created-child-join-constant-input, with the input also read in a
// stateful branch: its fill re-runs no join, so the fresh scope still inits it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, y: "a" },
    click,
    { show: true, y: "b" },
    click,
    { show: false, y: "c" },
    { show: true, y: "d" },
    click,
  ],
};
