import type { TestConfig } from "../../main.test";

// A branch script reading an input value and `$global` whole: a patch changing
// both re-runs it once, by its run-once guard.
const step = (value: string, brand: string, title = "Store") => ({
  show: true,
  title,
  value,
  $global: { brand, serializedGlobals: ["brand"] },
});

export const config: TestConfig = {
  patches: true,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [
    step("a", "Marko"),
    step("b", "Marko"),
    step("b", "Marko", "Store!"),
    step("b", "Fresh"),
    step("c", "Patch"),
  ],
};
