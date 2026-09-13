import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};
const add = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".add")!.click();
};

// A client-owned loop nested inside a client-owned chain: the fill
// reaches items revealed later, fresh, at both depths of ownership.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "n1" }, add, toggle, { note: "n2" }, add, { note: "n3" }],
};
