import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Both arms read the SAME server value: one fill key carries two arm
// joins, and each arm renders fresh whenever the client flips to it.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }, click],
};
