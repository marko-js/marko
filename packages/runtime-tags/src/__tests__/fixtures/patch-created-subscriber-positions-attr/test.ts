import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Two nested branches a patch creates read one server param, the later one in
// a join a call passes client state: each keeps its closure position.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, x: "a" },
    { show: true, x: "b" },
    click,
    { show: false, x: "c" },
    click,
    { show: true, x: "d" },
    click,
    { show: true, x: "e" },
  ],
};
