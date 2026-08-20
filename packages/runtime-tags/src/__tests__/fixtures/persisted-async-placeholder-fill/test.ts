import type { TestConfig } from "../../main.test";

// `@placeholder` content on an interactive page renders client-side when
// pending shows: its server read delivers as a fill, so the label is the
// patch's, not the initial render's.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { label: "first", promise: Promise.resolve("hi") },
    {
      label: "second",
      promise: {
        then: (onFulfilled: (value: string) => unknown) =>
          new Promise<string>((resolve) =>
            setTimeout(resolve, 10, "slow"),
          ).then(onFulfilled),
      },
    },
  ],
};
