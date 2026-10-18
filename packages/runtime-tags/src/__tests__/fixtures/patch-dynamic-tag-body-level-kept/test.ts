import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};
const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A body reads a server value its flush fills and a child's returned state no
// fill writes: a patch render's registration keeps the state's level.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, note: "a" },
    inc,
    { on: true, note: "b" },
    toggle,
    toggle,
    inc,
    { on: true, note: "c" },
  ],
};
