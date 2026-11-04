import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
}

// patch-bound-content-owner-locals without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a", items: [{ text: "one" }] },
    { show: true, label: "b", items: [{ text: "two" }, { text: "three" }] },
    toggle,
    { show: true, label: "c", items: [{ text: "four" }] },
    toggle,
    { show: true, label: "d", items: [{ text: "five" }, { text: "six" }] },
  ],
};
