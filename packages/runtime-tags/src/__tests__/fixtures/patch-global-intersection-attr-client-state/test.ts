import type { TestConfig } from "../../main.test";

const globals = (suffix: string) => ({
  $global: { suffix, serializedGlobals: ["suffix"] },
});

// A child's attribute reads client state and `$global`, and no client update runs it
// before a patch: the document subscribes the intersection's scope, so the patch re-runs it.
export const config: TestConfig = {
  patches: true,
  steps: [globals("a"), globals("b")],
};
