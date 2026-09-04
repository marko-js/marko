import type { TestConfig } from "../../main.test";

// Pending `<await>` inside `<try>` + `@placeholder`: the first frame
// applies ready fills and re-enters received placeholder state; the
// settle frame replaces it with the resolved body.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "Store", promise: Promise.resolve("hi") },
    {
      title: "Store!",
      promise: {
        then: (onFulfilled: (value: string) => unknown) =>
          new Promise<string>((resolve) =>
            setTimeout(resolve, 10, "slow"),
          ).then(onFulfilled),
      },
    },
  ],
};
