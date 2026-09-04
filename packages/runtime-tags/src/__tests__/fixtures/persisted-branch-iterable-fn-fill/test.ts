import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A registered function inside a custom iterator the bind scan cannot
// traverse still serializes: its own write channel binds it first, and
// binds share by value identity across the frame.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }],
};
