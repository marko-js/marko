import type { TestConfig } from "../../main.test";

const clickDiv = (document: Document) => document.querySelector("div")!.click();
const click = (document: Document) => document.querySelector("button")!.click();

// Plain twin of patch-spread-handler-reads-input: a spread's inline handler
// reads an input beside a read client state renders.
export const config: TestConfig = {
  equivalent: false,
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
