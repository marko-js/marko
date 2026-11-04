import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};
const add = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".add")!.click();
};

// A stateful loop nested inside a stateful chain: the fill
// reaches items revealed later, fresh, at both depths.
export const config: TestConfig = {
  patches: true,
  steps: [{ note: "n1" }, add, toggle, { note: "n2" }, add, { note: "n3" }],
};
