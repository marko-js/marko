import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(sel)!.click();
};

// A created scope's tag variable from a child whose input is client-fed:
// the child's return sets it as the scope's init runs, with no seed ahead of it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "a" },
    click(".log"),
    click(".edit"),
  ],
};
