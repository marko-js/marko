import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// Two consecutive responses with a pending `<await>`: the second must show
// its pending UI again (a settle from the first response is not sticky).
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "Store", promise: Promise.resolve("hi") },
    navigate(() => ({ title: "Store!", promise: resolveAfter("slow") })),
    navigate(() => ({ title: "Store!!", promise: resolveAfter("slower") })),
  ],
};
