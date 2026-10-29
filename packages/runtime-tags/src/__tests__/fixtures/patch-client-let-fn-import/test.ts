import type { TestConfig } from "../../main.test";

// A `<let>` holds a bare module function, which main can't serialize: a patch
// changing the input it is called with fails as main's document does.
export const config: TestConfig = {
  patches: true,
  error_html: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", more: false, n: 1, items: ["x"] },
    { label: "b", more: true, n: 2, items: ["z", "x"] },
    { label: "c", more: false, n: 3, items: ["x"] },
  ],
};
