import type { TestConfig } from "../../main.test";

// A try with a parameterized catch inside a server-selected branch
// constructs on reveal: the catch body is a registered section, not a
// template cycle.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { show: false, promise: Promise.resolve(1), title: "a" },
    { show: true, promise: Promise.resolve(1), title: "b" },
    { show: true, promise: Promise.reject(new Error("boom")), title: "c" },
  ],
};
