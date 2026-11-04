import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// As the member spread, spreading the whole input: the server writes the direct
// call's holes.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, { label: "c" }],
};
