import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The same, reading it only in a branch its param shows: the client's copy of the branch
// keeps what it rendered too.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { $global: { label: "a" } },
    { $global: { label: "b" } },
    clear,
    { $global: { label: "c" } },
  ],
};
