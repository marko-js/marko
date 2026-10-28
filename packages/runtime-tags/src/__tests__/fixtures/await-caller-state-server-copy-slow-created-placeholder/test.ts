import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// A patch creates a `@placeholder` try around the client's pending promise while
// the server's copy pends: the client shows the placeholder from its own code.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, label: "a", promise: Promise.resolve("a") },
    clickOpen,
    wait,
    navigate(createdSlowCopy, betweenFlushes),
    wait,
    clickSettle,
    wait,
  ],
};

function createdSlowCopy() {
  return { show: true, label: "b", promise: resolveAfter("SECRET_server") };
}

function betweenFlushes() {}

function clickOpen(document: Document) {
  document.querySelector<HTMLButtonElement>("button.open")!.click();
}

function clickSettle(document: Document) {
  document.querySelector<HTMLButtonElement>("button.settle")!.click();
}
