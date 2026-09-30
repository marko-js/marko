import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// A marked `<html lang>` in a stateful page must still emit `</body></html>`
// after the resume scripts (full-document CSR isn't supported by the harness).
export const config: TestConfig = {
  skip_csr: true,
  steps: [{ lang: "en" }, click("button")],
};
