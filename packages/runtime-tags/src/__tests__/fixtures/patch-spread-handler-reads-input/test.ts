import type { TestConfig } from "../../main.test";

const clickDiv = (document: Document) => document.querySelector("div")!.click();
const click = (document: Document) => document.querySelector("button")!.click();

// A spread's inline handler reads an input the server changes, beside a read
// client state renders: the handler registers once and logs the new value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a" },
    clickDiv,
    { label: "b" },
    clickDiv,
    click,
    { label: "c" },
    clickDiv,
  ],
};
