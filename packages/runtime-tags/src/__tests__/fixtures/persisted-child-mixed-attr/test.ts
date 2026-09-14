import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A mixed instance renders under a partial ownership mask: the server-fed
// label updates while the client-owned qty keeps its live value.
export const config: TestConfig = {
  persisted: true,
  steps: [{ label: "Store" }, click, { label: "Store!" }, click],
};
