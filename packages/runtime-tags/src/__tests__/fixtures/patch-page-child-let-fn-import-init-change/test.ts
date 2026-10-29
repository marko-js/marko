import type { TestConfig } from "../../main.test";

// A module function a `<let>` holds, which main can't serialize: a patch
// changing the input it is called with fails as main's document does.
export const config: TestConfig = {
  patches: true,
  error_html: true,
  steps: [
    { alt: false, more: false, label: "a" },
    { alt: false, more: true, label: "b" },
    { alt: false, more: false, label: "c" },
    { alt: true, more: true, label: "d" },
  ],
};
