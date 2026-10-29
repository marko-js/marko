import type { TestConfig } from "../../main.test";

// A function a `<let>` holds, its code never loaded: the page holds its id, so a
// patch calling it applies while the init is unchanged and rejects once it changed.
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
