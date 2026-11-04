import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body a created branch calls joins a param a call passes client
// state with one it passes server data: the join inits and the first subscribes.
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
