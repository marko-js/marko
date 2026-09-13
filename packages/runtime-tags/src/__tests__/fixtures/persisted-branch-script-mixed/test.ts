import type { TestConfig } from "../../main.test";

// A branch script mixing an effect-read input value with a `$global` key:
// one entry carries local accessors and the owner-hop depth, the key joins
// the host signal: either side changing re-runs it once, both at once too.
const step = (value: string, brand: string, title = "Store") => ({
  show: true,
  title,
  value,
  $global: { brand, serializedGlobals: ["brand"] },
});

export const config: TestConfig = {
  persisted: true,
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
