import type { TestConfig } from "../../main.test";
import { flush, navigate, resolveAfter, wait } from "../../utils/resolve";

const clickInTry = (document: Document) => {
  document.querySelectorAll<HTMLButtonElement>("button")[1].click();
};

// A lazy child's ready data that the document delivers while a held flush
// applies still resumes it: its button counts from its own state.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  equivalent: false,
  skip_optimize: true,
  steps: () => [
    { a: Promise.resolve("a1"), b: resolveAfter("b1", 1) },
    navigate(() => ({ a: Promise.resolve("a2"), b: Promise.resolve("b1") })),
    wait,
    flush,
    clickInTry,
  ],
};
