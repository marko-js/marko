import type { TestConfig } from "../../main.test";

// A marked `<html lang>` in a stateful page must still emit `</body></html>`
// after the resume scripts (full-document CSR isn't supported by the harness).
function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

export const config: TestConfig = {
  skip_csr: true,
  steps: [{ lang: "en" }, click],
};
