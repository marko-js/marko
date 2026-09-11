import type { TestConfig } from "../../main.test";

// A value the response's first frame bound (two reads) that a later frame
// (the settled await) writes again: it references the binding, not a copy.
export const config: TestConfig = {
  persisted: true,
  skip_fresh_render: true,
  steps: () => [
    { label: "a", promise: Promise.resolve("x") },
    {
      label: "b",
      // then() starts the timer so the delay begins at render.
      promise: {
        then: (onFulfilled: (value: string) => unknown) =>
          new Promise<string>((resolve) => setTimeout(resolve, 10, "y")).then(
            onFulfilled,
          ),
      },
    },
  ],
};
