import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A `<define>` built from its shell keeps the `content` its params take: what
// the content reads fills, though the server wrote the tag's group.
export const config: TestConfig = {
  patches: true,
  steps: [
    { card: false, label: "a", tag: "x" },
    { card: true, label: "b", tag: "y" },
    toggle,
    toggle,
    { card: true, label: "c", tag: "z" },
    toggle,
    toggle,
  ],
};
