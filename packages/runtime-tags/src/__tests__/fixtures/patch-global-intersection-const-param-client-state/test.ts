import type { TestConfig } from "../../main.test";

const globals = (suffix: string) => ({
  $global: { suffix, serializedGlobals: ["suffix"] },
  a: "A",
});

// A hole reads `$global` and a `<const>` of client state and a param, and no client update
// runs it before a patch: the document subscribes its scope, so the patch re-runs it.
export const config: TestConfig = {
  patches: true,
  steps: [globals("a"), globals("b")],
};
