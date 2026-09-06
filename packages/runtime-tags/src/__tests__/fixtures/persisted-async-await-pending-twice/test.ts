import type { TestConfig } from "../../main.test";

const slow = (value: string) => ({
  // then() starts the timer so the delay begins at render, not at
  // getSteps (which runs before the first document render).
  then: (onFulfilled: (value: string) => unknown) =>
    new Promise<string>((resolve) => setTimeout(resolve, 10, value)).then(
      onFulfilled,
    ),
});

// Two consecutive responses with a pending `<await>`: the second must show
// its pending UI again (a settle from the first response is not sticky).
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "Store", promise: Promise.resolve("hi") },
    { title: "Store!", promise: slow("slow") },
    { title: "Store!!", promise: slow("slower") },
  ],
};
