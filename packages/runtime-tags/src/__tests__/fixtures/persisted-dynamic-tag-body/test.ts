import type { TestConfig } from "../../main.test";

// A dynamic tag with a body: the entry names the body content so a tag
// swap or attribute change keeps rendering it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { tag: "div", cls: "a", wrap: true, note: "x" },
    { tag: "div", cls: "b", wrap: true, note: "y" },
    { tag: "section", cls: "b", wrap: false, note: "z" },
    { tag: "section", cls: "c", wrap: true, note: "w" },
  ],
};
