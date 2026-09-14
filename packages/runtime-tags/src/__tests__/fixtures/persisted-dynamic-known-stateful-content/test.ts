import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A statically known renderer used dynamically renders its content inside
// its own stateful branch: the body is stateful structure, its hole fills.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { label: "one" },
    { label: "two" },
    click,
    { label: "three" },
    click,
    { label: "four" },
  ],
};
