import type { TestConfig } from "../../main.test";

// A `<script>` reading a global-DERIVED binding: the derivation refreshes
// over the wire and the script re-runs, so the dataset tracks the latest
// patched brand.
export const config: TestConfig = {
  persisted: true,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
  ],
};
