import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "First", variant: "a" },
    { title: "Second", variant: "b" },
    // Flips the branch: the patch must fail so the caller can navigate.
    { err: true, title: "ignored" },
  ],
};
