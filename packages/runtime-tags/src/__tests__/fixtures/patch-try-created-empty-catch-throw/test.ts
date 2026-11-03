import type { TestConfig } from "../../main.test";

// A patch creates a `<try>` whose `@catch` is empty; a client error in its
// body is still caught, as in a document's try, and renders nothing.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, promise: Promise.resolve("a") },
    { show: true, promise: Promise.resolve("b") },
    (container: Document) => container.querySelector("button")!.click(),
  ],
};
