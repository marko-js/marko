import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Constant attrs on a paired child while a client-owned note updates:
// constants must not clobber the live note, and must keep CSR parity.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "server" }, click, { note: "server2" }, click],
};
