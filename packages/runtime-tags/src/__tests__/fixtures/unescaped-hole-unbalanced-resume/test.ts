import type { TestConfig } from "../../main.test";

// An unclosed tag in a resumed `$!{}` value pulls its end marker and the
// markup after it into that tag; the debug build reports it under `## Console`.
export const config: TestConfig = {
  skip_csr: true,
  skip_parity: true,
};
