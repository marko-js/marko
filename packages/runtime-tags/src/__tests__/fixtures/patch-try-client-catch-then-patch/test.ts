import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client error shows the `@catch`; the next patch rebuilds the try from
// its entry rather than writing the body's values into the catch.
export const config: TestConfig = {
  patches: true,
  steps: [{ message: "a" }, click, { message: "b" }, click, { message: "c" }],
};
