import type { TestConfig } from "../../main.test";

// A native tag name a `<let>` holds: a patch whose server init names another
// keeps the page's `<b>` and updates its title and text, as a client render
// does.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
    { tag: "i", label: "c" },
  ],
};
