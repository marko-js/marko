import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A `@catch` the document renders after its owner flushed joins the owner's
// subscriber set, so a patch changing only the title reaches it.
const later = () => {
  const p = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("boom")), 5),
  );
  p.catch(() => {});
  return p;
};
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { title: "first", promise: later() },
    wait,
    { title: "second", promise: later() },
  ],
};
