import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
const settle = (document: Document) => {
  (document.defaultView as any).__resolve("c");
};

// A patch's inner catch under a `@placeholder` a client await also holds:
// the catch releases only its own await's count, so the placeholder stays
// up until the client await settles.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { a: Promise.resolve("a1") },
    click,
    navigate(
      () => ({ a: rejectAfter(new Error("boom"), 1) }),
      () => {},
    ),
    settle,
  ],
};
