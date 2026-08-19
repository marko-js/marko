import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A prop the child renders receives a server value inside client-owned
// structure: the fill delivers it, and the child's own tag signal
// re-renders on a change.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { renderer: "div" },
    click,
    { renderer: "span" },
    click,
    { renderer: "em" },
    click,
  ],
};
