import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};

// Two calls of a child whose `<await>` takes its input's promise: one made
// from the caller's `<let>`, one the server's.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [{ show: true, p: resolveAfter("b") }, wait, toggle, wait],
};
