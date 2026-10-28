import type { TestConfig } from "../../main.test";

// A `@catch` inside a child's `<define>` body whose effect reads a local the body
// derives from the child's input: a flush creates the catch from its holes.
const boom = () => {
  const p = Promise.reject(new Error("boom"));
  p.catch(() => {});
  return p;
};
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { label: "a", promise: Promise.resolve("ok") },
    { label: "b", promise: boom() },
    { label: "c", promise: boom() },
  ],
};
