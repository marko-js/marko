import type { TestConfig } from "../../main.test";

// A caught `<try>` whose body's await rejects again keeps its `@catch`, with
// nothing reloading; created anew, it renders its body.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: true, value: Promise.reject(new Error("down")) },
    { show: true, value: Promise.reject(new Error("down")) },
    {},
    { show: true, value: Promise.resolve("ready") },
  ],
};
