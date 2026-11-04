import type { TestConfig } from "../../main.test";

const brand = (brand: string) => ({
  $global: { brand, serializedGlobals: ["brand"] },
});

// A script and a text reading the same state and global share one join, which
// the script's resume run subscribes: it runs once on resume and once per change.
export const config: TestConfig = {
  patches: true,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [brand("a"), brand("b")],
};
