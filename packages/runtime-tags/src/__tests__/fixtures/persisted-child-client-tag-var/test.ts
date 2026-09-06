import type { TestConfig } from "../../main.test";

const bump = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.bump")!.click();
};
const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// An unassigned tag variable on a child inside client-owned structure is a
// local read: the return recomputes wholly client-side each render.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { label: "a" },
    bump,
    { label: "b" },
    toggle,
    { label: "c" },
    toggle,
    { label: "d" },
  ],
};
