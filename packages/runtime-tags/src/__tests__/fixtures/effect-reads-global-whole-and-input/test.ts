import type { TestConfig } from "../../main.test";

const page = (page: string, user: string) => ({
  page,
  $global: { user, serializedGlobals: ["user"] },
});

// patch-effect-reads-global-whole-and-input without patches: each input is its
// own document.
export const config: TestConfig = {
  equivalent: false,
  steps: [page("a", "x"), page("a", "y"), page("b", "y")],
};
