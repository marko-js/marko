import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// On a page with no client code, a `@catch` the document caught and one a patch
// created both follow later `$global` changes while caught: a text joining the error
// and an `<await>`.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { early: true, $global: globals("g1", "x") },
    { early: true, late: true, $global: globals("g2", "y") },
    wait,
    { early: true, late: true, $global: globals("g3", "z") },
    wait,
  ],
};

function globals(label: string, p: string) {
  return { label, p: Promise.resolve(p), serializedGlobals: ["label", "p"] };
}
