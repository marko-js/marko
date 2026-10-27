import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ error: new Error("SHOWN_x"), label: "b" }, wait, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
