import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const g = (f: string) => ({ $global: { f, serializedGlobals: ["f"] } });

// A patch shows an `<await>` whose body joins its value with `$global`, on a page
// whose template ships no client code: the server writes the join each time.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, p: Promise.resolve("a"), ...g("1") },
    { show: true, p: Promise.resolve("b"), ...g("2") },
    wait,
    { show: true, p: Promise.resolve("c"), ...g("3") },
    wait,
  ],
};
