import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server <if> and <for> inside an unpaired site body.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { label: "one", on: true, items: ["a", "b"] },
    { label: "two", on: true, items: ["a", "b", "c"] },
    click,
    { label: "three", on: false, items: ["b"] },
    click,
    { label: "four", on: true, items: ["a"] },
  ],
};
