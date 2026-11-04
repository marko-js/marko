import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter, resolveAfter } from "../../utils/resolve";

// A try caught after its first flush leaves a later flush's walk reaching the
// placeholder try past a pending await: that flush ships its shell.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    {
      a: Promise.resolve(1),
      x: Promise.resolve(2),
      c: Promise.resolve(3),
      d: Promise.resolve(4),
    },
    navigate(pending, betweenFlushes),
  ],
};

function pending() {
  return {
    a: rejectAfter(new Error("boom"), 1),
    x: resolveAfter(5, 2),
    c: resolveAfter(6, 4),
    d: resolveAfter(7, 3),
  };
}

function betweenFlushes() {}
