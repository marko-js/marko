import type { TestConfig } from "../../main.test";

// Static `<textarea>` body content beginning with a newline must round-trip:
// the HTML parser strips a single leading newline, so the server compensates so
// the value matches client rendering (which sets it via DOM property).
export const config: TestConfig = {
  steps: [{}],
};
