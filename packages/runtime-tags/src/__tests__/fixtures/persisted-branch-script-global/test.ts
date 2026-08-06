import type { TestConfig } from "../../main.test";

// A branch `<script>` reading a serialized global: a constructed branch
// runs it against current globals, and later global changes re-queue it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, $global: { brand: "Marko", serializedGlobals: ["brand"] } },
    { show: false, $global: { brand: "Marko", serializedGlobals: ["brand"] } },
    { show: true, $global: { brand: "Fresh", serializedGlobals: ["brand"] } },
    { show: true, $global: { brand: "Patch", serializedGlobals: ["brand"] } },
  ],
};
