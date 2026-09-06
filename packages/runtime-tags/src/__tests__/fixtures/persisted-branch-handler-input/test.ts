import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch handler capturing server input: fills keep the capture current
// on paired scopes, and a constructed branch's handler reads the value the
// construct's frame shipped.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true, tag: "a" },
    click,
    { title: "Store", show: true, tag: "b" },
    click,
    { title: "Store", show: false, tag: "c" },
    { title: "Store", show: true, tag: "d" },
    click,
  ],
};
