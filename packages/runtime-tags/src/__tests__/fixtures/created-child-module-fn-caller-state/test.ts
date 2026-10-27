import type { TestConfig } from "../../main.test";

const clickLabel = (d: Document) =>
  (d.querySelector(".l") as HTMLElement).click();

// Main's document can't serialize a bare module function the client reads: its invariant.
export const config: TestConfig = {
  error_html: true,
  skip_csr: true,
  steps: [{ show: true, open: true }, clickLabel],
};
