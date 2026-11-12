import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// On a page with no client code, a `@catch` the document caught and one a patch
// creates read `$global` beside their error and in an `<await>`: nothing of the
// template ships, so neither subscribes a registration the page lacks.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { early: true, $global: globals("g1", "x") },
    { early: true, late: true, $global: globals("g1", "x") },
    wait,
  ],
};

function globals(label: string, p: string) {
  return { label, p: Promise.resolve(p), serializedGlobals: ["label", "p"] };
}
