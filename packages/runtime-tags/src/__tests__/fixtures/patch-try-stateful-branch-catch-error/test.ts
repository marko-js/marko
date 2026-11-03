import type { TestConfig } from "../../main.test";

// A `@catch` in a client-state `<if>`, which no patch renders: the patch sends
// the rejected promise by its fill, the error as the document sends it, and
// the client keeps the catch it renders.
const fail = (message: string) => {
  const err = new Error(message, { cause: new Error("cause") });
  (err as any).extra = "extra";
  const p = Promise.reject(err);
  p.catch(() => {});
  return p;
};
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { title: "a", p: fail("boom one") },
    { title: "b", p: fail("boom two") },
  ],
};
