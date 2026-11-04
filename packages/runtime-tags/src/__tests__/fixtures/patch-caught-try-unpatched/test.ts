import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A caught `<try>` in a branch client state renders: patches leave that
// structure to the client, so it stays caught until the client creates it anew.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { label: "a", fail: true },
    { label: "b" },
    click,
    click,
    { label: "c", fail: true },
  ],
};
