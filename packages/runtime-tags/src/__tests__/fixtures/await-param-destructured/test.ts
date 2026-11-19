import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// An `<await>`'s param destructures the value it settles to, object and array alike.
export const config: TestConfig = {
  // A resumed page settled on the server; a client render settles after it starts.
  equivalent: false,
  steps: [{ user: { name: "a", tags: ["x", "y"] } }, wait, flush, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
