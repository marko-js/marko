import type { TestConfig } from "../../main.test";

// A patch ships no nonce, so a reader of the page's keeps its value and stays
// put while another key changes.
export const config: TestConfig = {
  patches: true,
  // The page keeps its document's nonce, which a fresh render of the patch's lacks.
  skip_fresh_render: true,
  steps: [
    { $global: { cspNonce: "doc", x: "a", serializedGlobals: ["x"] } },
    { $global: { cspNonce: "patch", x: "b", serializedGlobals: ["x"] } },
  ],
};
