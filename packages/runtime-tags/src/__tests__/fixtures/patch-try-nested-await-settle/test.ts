import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// The outer await settles first and its body starts the inner one: the
// `@placeholder` stays up until the inner settles instead of flickering.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { a: Promise.resolve("a1"), b: Promise.resolve("b1") },
    navigate(
      () => ({ a: resolveAfter("a2", 1), b: resolveAfter("b2", 3) }),
      () => {},
    ),
  ],
};
