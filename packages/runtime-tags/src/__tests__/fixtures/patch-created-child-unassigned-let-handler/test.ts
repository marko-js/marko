import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child a flush creates seeds its never-assigned `<let>` from that flush's
// input, and its handler reads it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false, foo: "ab" }, { show: true, foo: "abc" }, click],
};
