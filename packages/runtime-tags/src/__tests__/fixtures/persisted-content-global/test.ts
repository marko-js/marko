import type { TestConfig } from "../../main.test";

// A `content=` renderer inside a persisted child needs a dynamic tag,
// which fails closed today: when tier-3 lifts that, this shape must be
// covered by content-renderer intrinsics before it may compile.
export const config: TestConfig = {
  error_compiler: ["tags/widget/index.marko"],
  persisted: true,
};
