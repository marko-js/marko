import type { TestConfig } from "../../main.test";

const brand = (brand: string) => ({
  $global: { brand, serializedGlobals: ["brand"] },
});

// A badge the page mounts on the client has its own `$global`: a patch to the
// page's re-runs only the page's badge.
export const config: TestConfig = {
  patches: true,
  // The scripts leave state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [brand("a"), brand("b")],
};
