import type { TestConfig } from "../../main.test";

// A child custom tag's `<script>` reading a serialized global: the globals
// stamp is depth-independent, so the effect re-queues across templates.
export const config: TestConfig = {
  persisted: true,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [
    { $global: { brand: "Marko", serializedGlobals: ["brand"] } },
    { $global: { brand: "Marko", serializedGlobals: ["brand"] } },
    { $global: { brand: "Runtime", serializedGlobals: ["brand"] } },
  ],
};
