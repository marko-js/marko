import type { TestConfig } from "../../main.test";

// A native tag a `<let>` names whose name holes also render as text (its title,
// its text, a created branch's text): the client keeps the page's name in each.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { tag: "b", label: "a", more: false },
    { tag: "b", label: "b", more: true },
    { tag: "i", label: "c", more: true },
  ],
};
