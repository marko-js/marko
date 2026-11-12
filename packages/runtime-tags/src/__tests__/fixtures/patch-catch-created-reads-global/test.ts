import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The `@catch`es of a try the document caught and of one a patch caught follow later
// `$global` changes, in a template with client work: a text reading the error, and an `<await>`.
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
