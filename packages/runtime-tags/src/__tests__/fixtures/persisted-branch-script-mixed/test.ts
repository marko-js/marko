import type { TestConfig } from "../../main.test";

// A branch script mixing an effect-read input value with a `$global` key:
// one entry carries local accessors, the owner-hop depth, AND the global
// segment — either side changing re-runs it, neither means no run.
const step = (value: string, brand: string, title = "Store") => ({
  show: true,
  title,
  value,
  $global: { brand, serializedGlobals: ["brand"] },
});

export const config: TestConfig = {
  persisted: true,
  steps: [
    step("a", "Marko"),
    step("b", "Marko"),
    step("b", "Marko", "Store!"),
    step("b", "Fresh"),
  ],
};
