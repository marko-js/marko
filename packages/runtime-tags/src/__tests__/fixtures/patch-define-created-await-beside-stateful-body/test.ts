import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created `<await>` body passes its value and an owner value to a stateful
// body: the value's fill registers itself; the owner's lands before it renders.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, label: "a", promise: Promise.resolve("p") },
    { show: true, label: "b", promise: Promise.resolve("q") },
    click,
    { show: true, label: "c", promise: Promise.resolve("r") },
  ],
};
