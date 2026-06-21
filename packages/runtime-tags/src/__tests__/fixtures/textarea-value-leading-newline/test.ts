import type { TestConfig } from "../../main.test";

// An uncontrolled `<textarea value>` whose value begins with a newline must
// round-trip through resume. The HTML parser strips a single leading newline
// from `<textarea>` content, so the server emits a compensating one; otherwise
// resume (which sets the value via DOM property) keeps the newline while the
// server-rendered markup dropped it.
export const config: TestConfig = {
  steps: [{}],
};
