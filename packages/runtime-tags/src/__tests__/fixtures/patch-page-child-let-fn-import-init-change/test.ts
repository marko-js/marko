import type { TestConfig } from "../../main.test";

// A function from a module, held by a `<let>`: no registration names it, so the
// page holds no id it can match and every patch calling it rejects.
export const config: TestConfig = {
  patches: true,
  expect_rejection: true,
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  steps: [
    { alt: false, more: false, label: "a" },
    { alt: false, more: true, label: "b" },
    { alt: false, more: false, label: "c" },
    { alt: true, more: true, label: "d" },
  ],
};
