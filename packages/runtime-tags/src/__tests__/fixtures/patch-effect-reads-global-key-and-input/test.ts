import type { TestConfig } from "../../main.test";

const page = (page: string, name: string) => ({
  page,
  $global: { user: { name }, serializedGlobals: ["user"] },
});

// A script reads a `$global` key's member and an input a patch writes: it runs
// when either changes, and a patch sending both again leaves it alone.
export const config: TestConfig = {
  patches: true,
  steps: [page("a", "x"), page("b", "x"), page("b", "y")],
};
