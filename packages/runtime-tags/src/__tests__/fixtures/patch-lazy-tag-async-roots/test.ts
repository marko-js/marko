import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelectorAll("button").forEach((b) => b.click());
};

// Two awaits settling in separate chunks both render the same lazy child:
// the response names its module once, and every later root of the
// response keys behind it so the settles apply in order.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: () => [
    { first: Promise.resolve("a1"), second: Promise.resolve("b1") },
    navigate(() => ({
      first: resolveAfter("a2", 1),
      second: resolveAfter("b2", 2),
    })),
    wait,
    click,
  ],
};
