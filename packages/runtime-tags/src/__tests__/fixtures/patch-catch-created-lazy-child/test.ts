import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A `@catch` a patch creates, in a template with client work, renders a lazy child,
// which loads before a click and a later patch.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { label: "a" },
    { error: new Error("SHOWN_x"), label: "b" },
    wait,
    click,
    { error: new Error("SHOWN_y"), label: "c" },
  ],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
