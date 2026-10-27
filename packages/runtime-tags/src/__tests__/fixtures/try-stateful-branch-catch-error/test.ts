import type { TestConfig } from "../../main.test";

// A `@catch` in a client-state `<if>` for a rejected promise.
const fail = (message: string) => {
  const err = new Error(message, { cause: new Error("cause") });
  (err as any).extra = "extra";
  const p = Promise.reject(err);
  p.catch(() => {});
  return p;
};
export const config: TestConfig = {
  equivalent: false,
  steps: () => [{ title: "a", p: fail("boom one") }],
};
