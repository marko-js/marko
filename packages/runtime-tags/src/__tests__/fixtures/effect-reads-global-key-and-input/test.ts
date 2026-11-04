import type { TestConfig } from "../../main.test";

const page = (page: string, name: string) => ({
  page,
  $global: { user: { name }, serializedGlobals: ["user"] },
});

// patch-effect-reads-global-key-and-input without patches: each input is its
// own document.
export const config: TestConfig = {
  equivalent: false,
  steps: [page("a", "x"), page("b", "x"), page("b", "y")],
};
