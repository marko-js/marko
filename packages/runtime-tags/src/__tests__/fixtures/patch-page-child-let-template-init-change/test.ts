import type { TestConfig } from "../../main.test";

// A template a `<let>` holds, its module never loaded: the page holds its id, so a
// patch creating its tag applies while the init is unchanged and rejects once it changed.
export const config: TestConfig = {
  patches: true,
  expect_rejection: true,
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  steps: [
    { big: false, more: false, label: "a" },
    { big: false, more: true, label: "b" },
    { big: false, more: false, label: "c" },
    { big: true, more: true, label: "d" },
  ],
};
