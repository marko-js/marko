import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch a patch creates joins a param a call passes client state with one
// it passes server data: the join inits, as its server member never arrives.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, x: "a" },
    { show: true, x: "b" },
    click,
    { show: false, x: "c" },
    click,
    { show: true, x: "d" },
  ],
};
