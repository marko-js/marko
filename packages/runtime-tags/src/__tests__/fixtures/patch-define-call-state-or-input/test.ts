import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// Every call passes the branch's test client state mixed with a page input:
// the client derives it and creates the branch itself.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", show: false },
    { label: "b", show: true },
    { label: "c", show: false },
    click,
    { label: "d", show: true },
    click,
    { label: "e", show: false },
    { label: "f", show: true },
  ],
};
