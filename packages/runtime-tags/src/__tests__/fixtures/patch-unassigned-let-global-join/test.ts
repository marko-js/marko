import type { TestConfig } from "../../main.test";

// A `<let>` nothing assigns joined with a `$global` key: a patch changing the
// key runs the join with the `<let>`'s value.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value.
  skip_fresh_render: true,
  steps: [
    { a: "a1", $global: { flag: "f1", serializedGlobals: ["flag"] } },
    { a: "a2", $global: { flag: "f2", serializedGlobals: ["flag"] } },
  ],
};
