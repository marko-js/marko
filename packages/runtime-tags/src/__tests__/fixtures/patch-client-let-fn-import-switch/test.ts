import type { TestConfig } from "../../main.test";

// A `<let>` holds a bare module function, which main can't serialize: a patch
// changing the input it is called with fails as main's document does.
export const config: TestConfig = {
  patches: true,
  error_html: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", alt: false },
    { label: "b", alt: false },
    { label: "c", alt: false },
  ],
};
