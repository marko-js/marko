import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The same with positional args: the direct call's arg refreshes through a fill
// only its key reaches.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a" },
    { label: "b" },
    click,
    { label: "c" },
    click,
    { label: "d" },
  ],
};
