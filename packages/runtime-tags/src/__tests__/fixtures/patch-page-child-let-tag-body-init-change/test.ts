import type { TestConfig } from "../../main.test";

// patch-page-child-let-tag-body, then a patch changing the `<let>`'s init: the page
// holds the first tag, so that patch rejects and the page loads the document.
export const config: TestConfig = {
  patches: true,
  expect_rejection: true,
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  steps: [
    { alt: false, more: false, label: "a" },
    { alt: false, more: true, label: "b" },
    { alt: true, more: true, label: "c" },
  ],
};
