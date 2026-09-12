import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// Pending `<await>` inside `<try>` + `@placeholder`: the first flush
// applies ready fills and re-enters received placeholder state; the
// settle flush replaces it with the resolved body.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "Store", promise: Promise.resolve("hi") },
    navigate(() => ({ title: "Store!", promise: resolveAfter("slow") })),
  ],
};
