import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";
import { click } from "../render-effect-helpers/test";

// The same template as `render-effect-helpers`, rendered behind a client
// `<await>` so every render-effect helper runs patched (queued and replayed
// at the commit). The per-step rendered HTML must match that fixture's
// exactly; only the mutation logs may differ.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click, wait, click, wait],
};
