import type { TestConfig } from "../../main.test";

// A `<script>` reading a serialized global: a frame whose globals changed
// re-queues the effect, while an unchanged re-ship never re-runs it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "Marko", serializedGlobals: ["brand"] } },
    { $global: { brand: "Marko", serializedGlobals: ["brand"] } },
    { $global: { brand: "Runtime", serializedGlobals: ["brand"] } },
  ],
};
