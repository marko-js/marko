import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The tag also rendered by the client, its joins reading an array built from
// the value: the init waits on the array's slot, which the fill marks.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, x: "a" },
    click,
    { show: true, x: "b" },
    click,
    { show: true, x: "c" },
  ],
};
