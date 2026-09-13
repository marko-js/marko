import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child using the call-clean arrow pattern internally admits at a
// client-owned call site: the whole instance is client-created.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }, click],
};
