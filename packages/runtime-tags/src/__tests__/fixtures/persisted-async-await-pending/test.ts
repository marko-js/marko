import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A patch whose `<await>` is still pending flushes ready fills now and
// the resolved body in a later flush.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "Store", promise: Promise.resolve("hi") },
    navigate(() => ({ title: "Store!", promise: resolveAfter("slow") })),
  ],
};
