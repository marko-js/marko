import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A mixed instance renders under a partial group mask: the server-fed
// label updates while the client-fed qty keeps its live value.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "Store" }, click, { label: "Store!" }, click],
};
