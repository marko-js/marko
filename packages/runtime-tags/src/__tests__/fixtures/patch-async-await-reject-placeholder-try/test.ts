import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

// A patch whose `<await>` rejects in a try with only a placeholder: the error
// leaves it for the enclosing `@catch`.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    navigate(() => ({ promise: rejectAfter(new Error("boom")) })),
  ],
};
