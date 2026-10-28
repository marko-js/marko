import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A kept body under an `<await>` inside a branch calls a `<define>` reading a
// root value: the body's end writes a fill of a section above its parent.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: true, on: false, note: "a", v: resolveAfter("x", 1) },
    navigate(() => ({
      show: true,
      on: true,
      note: "b",
      v: resolveAfter("y", 1),
    })),
    toggle,
    toggle,
    navigate(() => ({
      show: true,
      on: true,
      note: "c",
      v: resolveAfter("z", 1),
    })),
    toggle,
    toggle,
  ],
};
