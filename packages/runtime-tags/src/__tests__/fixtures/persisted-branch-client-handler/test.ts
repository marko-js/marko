import type { TestConfig } from "../../main.test";

const step = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.step")!.click();
};
const read = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.read")!.click();
};

// A handler-only server read inside client-owned structure: the value
// ships as an owner slot write (no fill registration needed), so the
// handler reads the LATEST server value at call time.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, step, step, { title: "b" }, read],
};
