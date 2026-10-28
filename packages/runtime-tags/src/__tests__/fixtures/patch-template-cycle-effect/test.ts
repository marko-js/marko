import type { TestConfig } from "../../main.test";

// A template rendering itself through another's `<if>`: the tag closing the
// import cycle writes its entry, so a patch creates every level, effect included.
export const config: TestConfig = {
  patches: true,
  steps: [{ n: 0 }, { n: 2 }],
};
