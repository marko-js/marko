import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// `@placeholder` content on an interactive page renders client-side when
// pending shows: its server read delivers as a fill, so the label is the
// patch's, not the initial render's.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { label: "first", promise: Promise.resolve("hi") },
    navigate(() => ({ label: "second", promise: resolveAfter("slow") })),
  ],
};
