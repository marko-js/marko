import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Created rows pass their item to a stateful body, beside a constant: the
// item's fill registers itself, as only its key reaches it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { rows: ["1"], open: true, label: "a" },
    { rows: ["1", "2"], open: true, label: "b" },
    click,
    { rows: ["2", "3"], open: true, label: "c" },
  ],
};
