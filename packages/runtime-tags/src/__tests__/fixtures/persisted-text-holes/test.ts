import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "First", body: "one" },
    { title: "Second", body: "two" },
    { title: 0, body: null },
  ],
};
