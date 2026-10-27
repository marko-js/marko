import type { TestConfig } from "../../main.test";

// A `<try>` whose async body writes nothing resumable still names its
// `@catch` to the page, so a patch whose body rejects shows the catch.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { label: "a", $global: { promise: Promise.resolve(1) } },
    { label: "b", $global: { promise: Promise.reject(new Error("boom")) } },
  ],
};
