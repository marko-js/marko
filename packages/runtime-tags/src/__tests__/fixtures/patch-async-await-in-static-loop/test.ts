import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A static loop's rows await a value settling after the response's first flush:
// the settle re-links each row by key, which only `patches/loop-item` applies.
export const config: TestConfig = {
  patches: true,
  steps: () => [{ p: Promise.resolve(1) }, navigate(settlesLater)],
};

function settlesLater() {
  return { p: resolveAfter(2) };
}
