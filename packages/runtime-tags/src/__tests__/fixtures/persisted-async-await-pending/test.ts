import type { TestConfig } from "../../main.test";

// A patch whose `<await>` is still pending holds one frame until it
// settles, then applies — it does not poison or navigate.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "Store", promise: Promise.resolve("hi") },
    {
      title: "Store!",
      promise: new Promise((resolve) => setTimeout(resolve, 10, "slow")),
    },
  ],
};
