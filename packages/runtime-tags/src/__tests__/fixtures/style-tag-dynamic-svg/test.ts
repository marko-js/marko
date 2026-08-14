import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{ color: "red" }, click],
  // The css var name embeds the template id, which differs by mode.
  skip_parity: true,
};
