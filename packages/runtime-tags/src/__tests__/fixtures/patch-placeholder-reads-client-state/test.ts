import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `@placeholder` reading client state updates while it shows and is destroyed
// when its body swaps in, as main's does: its resumed subscription is an effect.
export const config: TestConfig = {
  patches: true,
  steps: () => [{ promise: resolveAfter("hi", 5) }, wait, inc, inc],
};
