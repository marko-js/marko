import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter, resolveAfter } from "../../utils/resolve";

// An inner `<try>` catches while its sibling await still pends under the
// outer `@placeholder`: the placeholder stays up until that await settles.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { a: Promise.resolve("a1"), b: Promise.resolve("b1") },
    navigate(
      () => ({
        a: rejectAfter(new Error("boom"), 1),
        b: resolveAfter("b2", 3),
      }),
      () => {},
    ),
  ],
};
