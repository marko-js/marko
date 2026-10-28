import type { TestConfig } from "../../main.test";

// A dynamic `@catch` on a scriptless page: the page links the module that
// registers it, so the rejection flush fills the catch the client renders.
export const config: TestConfig = {
  patches: true,
  steps: [
    { promise: Promise.resolve("ok") },
    {
      promise: new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("boom")), 10),
      ),
    },
  ],
};
