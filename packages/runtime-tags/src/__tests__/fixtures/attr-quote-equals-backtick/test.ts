import type { TestConfig } from "../../main.test";

// `=` and backtick are not allowed in an unquoted HTML attribute value, so a
// value containing them (or starting with `=`) must be emitted quoted. See the
// `writes.html` snapshot.
export const config: TestConfig = {
  steps: [{ url: "/p?a=1&b=2", data: "=x`y" }],
};
