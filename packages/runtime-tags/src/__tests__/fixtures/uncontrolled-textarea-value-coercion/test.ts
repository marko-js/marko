import type { TestConfig } from "../../main.test";

// A non-string value must coerce the same on SSR and CSR. `true` renders as
// text "true" on SSR today but "" on CSR; both now use the attribute coercion.
export const config: TestConfig = {
  steps: [{ v: true }],
};
