import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// A server-owned root value (`$global`-derived, never serialized) read under
// a `<try>` placeholder: the resumed rows must not replay the closure, since
// the page holds no value to compute from; the flush fills the html instead.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { $global: { data: { params: { q: "a" }, items: resolveAfter([1, 2]) } } },
    wait,
    navigate(() => ({
      $global: { data: { params: { q: "b" }, items: resolveAfter([3, 4]) } },
    })),
    wait,
  ],
};
