import type { TestConfig } from "../../main.test";

// A lazy import resolves its assets before any page entry has loaded (here at
// import time, which only this harness's manifest banner supports).
export const config: TestConfig = {
  skip_csr: true,
};
