import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Client state flowing through a tag ARGUMENT classifies the instance
// client-owned exactly like an attribute would.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "Store" }, click, { title: "Store!" }, click],
};
