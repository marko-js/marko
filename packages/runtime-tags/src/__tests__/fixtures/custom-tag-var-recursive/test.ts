import type { TestConfig } from "../../main.test";

// A recursive tag is loaded mid-analyze, so its `<return>` may not have been
// walked when the recursive call site is checked; the compiler must not decide
// from that partial state that `nested` is always undefined.
export const config: TestConfig = {
  skip_ssr: true,
  skip_csr: true,
};
