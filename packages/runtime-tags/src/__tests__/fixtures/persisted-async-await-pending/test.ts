import type { TestConfig } from "../../main.test";

// A patch whose `<await>` is still pending flushes ready fills now and
// the resolved body in a later frame.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "Store", promise: Promise.resolve("hi") },
    {
      title: "Store!",
      // then() starts the timer so the delay begins at render, not at
      // getSteps (which runs before the first document render).
      promise: {
        then: (onFulfilled: (value: string) => unknown) =>
          new Promise<string>((resolve) =>
            setTimeout(resolve, 10, "slow"),
          ).then(onFulfilled),
      },
    },
  ],
};
