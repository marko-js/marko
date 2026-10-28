import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// An effect in an inner `<await>` body, in content another template renders
// on the client or the page renders in place: it runs once per value.
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
    {
      outer: true,
      inner: false,
      note: "b",
      v: resolveAfter("y", 1),
      w: resolveAfter("y", 1),
    },
    toggle,
    toggle,
    {
      outer: false,
      inner: true,
      note: "c",
      v: resolveAfter("z", 1),
      w: resolveAfter("z", 2),
    },
    toggle,
    toggle,
    {
      outer: true,
      inner: true,
      note: "d",
      v: resolveAfter("w", 2),
      w: resolveAfter("w", 1),
    },
    toggle,
    toggle,
  ],
};
