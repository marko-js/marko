import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child's script calling a client-chosen function among its joined inputs re-runs
// by the fill run its call sends, past its stored value's skip.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a" },
    { title: "b" },
    click,
    { title: "c" },
    click,
    { title: "d" },
  ],
};
