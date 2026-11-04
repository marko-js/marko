import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// Each row awaits before handing its body on: a row's value fills at its
// await's end, and only where a template keeps the body.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    {
      rows: [
        { id: 1, card: true, label: "a", p: Promise.resolve("x") },
        { id: 2, card: false, label: "b", p: Promise.resolve("x") },
      ],
    },
    navigate(() => ({
      rows: [
        { id: 1, card: true, label: "c", p: resolveAfter("y") },
        { id: 2, card: false, label: "d", p: resolveAfter("y") },
        { id: 3, card: true, label: "e", p: resolveAfter("y") },
      ],
    })),
    toggle,
    toggle,
  ],
};
