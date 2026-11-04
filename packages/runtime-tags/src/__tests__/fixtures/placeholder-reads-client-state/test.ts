import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-placeholder-reads-client-state without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [{ promise: resolveAfter("hi", 5) }, wait, inc, inc],
};
