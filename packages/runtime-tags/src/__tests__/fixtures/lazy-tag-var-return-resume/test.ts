import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazily loaded tag's variable, from a known and a dynamic tag, is returned
// during SSR and reaches the resumed parent once the module lands.
export const config: TestConfig = {
  steps: [{ show: true }, wait, inc],
  equivalent: false,
};

function inc(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}
