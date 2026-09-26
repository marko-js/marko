import type { TestConfig } from "../../main.test";

// The page's render ("_") claims every resume comment of the embedded one
// ("_2"); only debug reports it. CSR has no server `render` to embed.
export const config: TestConfig = {
  steps: [{}],
  skip_csr: true,
  skip_parity: true,
};
