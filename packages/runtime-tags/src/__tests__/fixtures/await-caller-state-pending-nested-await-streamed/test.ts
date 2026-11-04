import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// The client settles between a patch's flushes while its nested value streams:
// the body shows the earlier patch's nested value until the next flush.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { label: "a", inner: Promise.resolve("a") },
    clickOpen,
    wait,
    { label: "b", inner: Promise.resolve("b") },
    wait,
    navigate(slowInner, clickSettle),
    wait,
  ],
};

function slowInner() {
  return { label: "c", inner: resolveAfter("c") };
}

function clickOpen(document: Document) {
  document.querySelector<HTMLButtonElement>("button.open")!.click();
}

function clickSettle(document: Document) {
  document.querySelector<HTMLButtonElement>("button.settle")!.click();
}
