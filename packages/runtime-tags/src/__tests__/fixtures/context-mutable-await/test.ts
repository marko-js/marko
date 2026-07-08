import type { TestConfig } from "../../main.test";
import { after, flush } from "../../utils/resolve";

function change(container: Element) {
  container.querySelector<HTMLButtonElement>("button.change")!.click();
}

export const config: TestConfig = {
  // csr and ssr render logs legitimately differ for awaited content.
  equivalent: false,
  steps: [{}, after(1), flush, change],
};
