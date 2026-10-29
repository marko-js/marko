import type { TestConfig } from "../../main.test";

// A void tag a `<let>` names: a patch naming `<br>` keeps the page's `<input>`
// and updates its title, as a client render does.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { tag: "input", label: "a" },
    { tag: "input", label: "b" },
    { tag: "br", label: "c" },
  ],
};
