import type { TestConfig } from "../../main.test";

// A template a `<let>` holds, its tag first rendered by a patch: the client
// keeps the template as the init changes.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { big: false, more: false, label: "a" },
    { big: false, more: true, label: "b" },
    { big: false, more: false, label: "c" },
    { big: true, more: true, label: "d" },
  ],
};
