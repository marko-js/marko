import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// `flag` is never allow-listed, so the resumed `<if>` reads `undefined`.
export const config: TestConfig = {
  skip_optimize: true,
  equivalent: false,
  steps: [{ $global: { flag: true } }, click],
};
