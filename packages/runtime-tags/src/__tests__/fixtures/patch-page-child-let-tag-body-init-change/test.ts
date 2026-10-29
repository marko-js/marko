import type { TestConfig } from "../../main.test";

// patch-page-child-let-tag-body, then a patch changing the `<let>`'s init: the
// client keeps the page's `<em>`, and the patch updates its content, as a
// client render does.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { alt: false, more: false, label: "a" },
    { alt: false, more: true, label: "b" },
    { alt: true, more: true, label: "c" },
  ],
};
