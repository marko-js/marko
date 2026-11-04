import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const page = (page: string, name: string) => ({
  page,
  n: 1,
  $global: { user: { name }, serializedGlobals: ["user"] },
});

// A script reads a `$global` key's member and two inputs a patch writes, beside one
// reading the inputs alone: both run on resume, and again as what each reads changes.
export const config: TestConfig = {
  patches: true,
  // `wait` checks the resumed page against a client render, which no step carrying
  // `$global` keeps; a client step would end the later steps' fresh-render checks.
  steps: [page("a", "x"), wait, page("b", "x"), page("b", "y")],
};
