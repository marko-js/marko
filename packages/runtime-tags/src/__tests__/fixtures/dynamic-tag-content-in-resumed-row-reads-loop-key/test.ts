import type { TestConfig } from "../../main.test";

// Content a dynamic tag renders on the client inside a server-rendered row reads
// the row's key through its owner.
const openFirst = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".toggle")!.click();

export const config: TestConfig = {
  steps: [{}, openFirst],
};
