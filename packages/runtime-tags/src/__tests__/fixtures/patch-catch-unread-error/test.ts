import type { TestConfig } from "../../main.test";

// A `@catch` that never reads its error: the patch ships none.
export const config: TestConfig = {
  patches: true,
  steps: [
    { promise: Promise.resolve("ok") },
    {
      promise: new Promise<never>((_, reject) =>
        setTimeout(
          () => reject(new Error("secret db password in message")),
          10,
        ),
      ),
    },
  ],
};
