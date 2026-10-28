import type { TestConfig } from "../../main.test";

const brand = (brand: string) => ({
  $global: { brand, serializedGlobals: ["brand"] },
});

// patch-global-serialize without patches: each input is its own document.
export const config: TestConfig = {
  equivalent: false,
  steps: [brand("a"), brand("b")],
};
