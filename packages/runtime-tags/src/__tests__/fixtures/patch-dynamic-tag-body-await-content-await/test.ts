import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// Content under an `<await>` inside content under another: whichever a
// renderer keeps, what the inner body reads fills.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    {
      outer: false,
      inner: false,
      note: "a",
      v: resolveAfter("x", 1),
      w: resolveAfter("x", 1),
    },
    navigate(() => ({
      outer: true,
      inner: false,
      note: "b",
      v: resolveAfter("y", 1),
      w: resolveAfter("y", 1),
    })),
    toggle,
    toggle,
    navigate(() => ({
      outer: false,
      inner: true,
      note: "c",
      v: resolveAfter("z", 1),
      w: resolveAfter("z", 2),
    })),
    toggle,
    toggle,
    navigate(() => ({
      outer: true,
      inner: true,
      note: "d",
      v: resolveAfter("w", 2),
      w: resolveAfter("w", 1),
    })),
    toggle,
    toggle,
  ],
};
