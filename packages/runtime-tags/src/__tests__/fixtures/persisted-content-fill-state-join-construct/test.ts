import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A content body reads a server fill inside a client-state intersection:
// a constructed body (a new loop item) must run that intersection once.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { p: { name: "n" }, items: [{ id: 1, title: "a" }] },
    {
      p: { name: "n" },
      items: [
        { id: 1, title: "a" },
        { id: 2, title: "b" },
      ],
    },
    click,
    { p: { name: "m" }, items: [{ id: 2, title: "b" }] },
  ],
};
