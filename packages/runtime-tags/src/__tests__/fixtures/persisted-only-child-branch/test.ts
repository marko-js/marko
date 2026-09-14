import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An only-child conditional's accessor holds its container element rather
// than a marker: constructing on divergence must insert INSIDE it, through
// repeated hide/show cycles, without disturbing client state.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false },
    click,
    { show: true, msg: "there" },
    { show: false },
    { show: true, msg: "again" },
  ],
};
