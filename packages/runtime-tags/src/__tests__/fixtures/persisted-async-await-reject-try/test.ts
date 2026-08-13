import type { TestConfig } from "../../main.test";

// A patch whose `<await>` rejects: prefix frame is pending, the error
// arrives as a later frame and `@catch` receives it.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    {
      promise: {
        then: (
          _ok: (value: string) => unknown,
          fail: (err: unknown) => unknown,
        ) =>
          new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("boom")), 10),
          ).then(_ok, fail),
      },
    },
  ],
};
