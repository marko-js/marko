import type { TestConfig } from "../../main.test";

// A caught `<try>` in a keyed row the navigations keep stays caught while it
// throws, beside rows created anew; once its body renders, the patch rejects.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [
    { rows: [{ key: 1, fail: true }] },
    { rows: [{ key: 1, fail: true }, { key: 2 }] },
    {
      rows: [
        { key: 1, fail: true },
        { key: 3, fail: true },
      ],
    },
    { rows: [{ key: 1 }, { key: 3, fail: true }] },
  ],
};
