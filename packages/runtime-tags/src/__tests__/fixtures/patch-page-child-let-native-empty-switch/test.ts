import type { TestConfig } from "../../main.test";

// A native tag a `<let>` names whose server init turns empty: the client keeps
// the page's `<b>`.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { tag: "b", label: "a" },
    { tag: "", label: "b" },
  ],
};
