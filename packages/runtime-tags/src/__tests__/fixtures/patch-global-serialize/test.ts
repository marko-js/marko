import type { TestConfig } from "../../main.test";

const brand = (brand: string) => ({
  $global: { brand, serializedGlobals: ["brand"] },
});

// A script serializing `$global` sees what global-serialize's does, though the
// document and the script subscribe this scope to joins reading it.
export const config: TestConfig = {
  patches: true,
  steps: [brand("a"), brand("b")],
};
