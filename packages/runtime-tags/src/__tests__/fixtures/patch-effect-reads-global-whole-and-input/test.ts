import type { TestConfig } from "../../main.test";

const page = (page: string, user: string) => ({
  page,
  $global: { user, serializedGlobals: ["user"] },
});

// A script reads `$global` whole and an input a patch writes: it runs when either
// changes, and a patch sending both again leaves it alone.
export const config: TestConfig = {
  patches: true,
  steps: [page("a", "x"), page("a", "y"), page("b", "y")],
};
