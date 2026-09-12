import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

// A patch whose `<await>` rejects: prefix flush is pending, the error
// arrives as a later flush and `@catch` receives it.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    navigate(() => ({ promise: rejectAfter(new Error("boom")) })),
  ],
};
