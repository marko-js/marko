import type { TestConfig } from "../../main.test";

const click = (index: number) => (document: Document) =>
  document.querySelectorAll("button")[index].click();

// A tag a client-state `<if>` renders: its closure's walk finds no scope until the
// client renders the tag, whose code registers the positions it walks.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a" },
    { label: "b" },
    click(0),
    { label: "c" },
    click(1),
    click(1),
    { label: "d" },
  ],
};
