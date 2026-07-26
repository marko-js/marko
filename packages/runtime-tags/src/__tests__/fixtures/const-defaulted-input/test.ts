import type { TestConfig } from "../../main.test";

// `??`/`||` defaults cannot be nullish, so their members read directly; `&&`
// still can, and keeps its optional chain. Both inputs run so the falsy
// branch proves the `&&` value is still guarded.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, { opts: { label: "given", size: 9 } }],
};
