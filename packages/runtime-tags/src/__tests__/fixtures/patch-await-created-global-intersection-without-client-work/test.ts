import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const g = (f: string) => ({ $global: { f, serializedGlobals: ["f"] } });

// A patch shows an `<await>` whose body reads its value and `$global` in one hole, in a
// template without client work: the server writes the hole each time.
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
