import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// In a template without client work, the `@catch`es of a try the document caught and of one
// a patch catches read `$global` beside their error and in an `<await>`: none subscribes.
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
