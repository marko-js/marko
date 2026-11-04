import type { TestConfig } from "../../main.test";

function fail(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

// A body a template renders in a `@catch` reading its error takes the latest
// patch's value of what it reads once a client error shows the catch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, note: "a" },
    { on: true, note: "b" },
    { on: true, note: "c" },
    fail,
  ],
};
