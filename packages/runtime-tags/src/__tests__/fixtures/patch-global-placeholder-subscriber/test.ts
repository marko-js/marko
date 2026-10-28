import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const page = (brand: string, promise: Promise<string>) => ({
  promise,
  $global: { brand, serializedGlobals: ["brand"] },
});

// A `@placeholder` whose only client work is a `$global` join subscribes its scope on
// resume, as main's does: a branch, live while its body streams.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    page("a", resolveAfter("hi")),
    navigate(() => page("b", resolveAfter("ho"))),
  ],
};
