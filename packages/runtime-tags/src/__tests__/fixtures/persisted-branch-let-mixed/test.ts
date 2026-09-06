import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(sel)!.click();
};

// A root intersection fill and a branch seed fill coexist: keys never
// collide, the root fill updates the intersection, and constructing the
// branch seeds `n` without touching root state.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    click("button.root"),
    click("button.inner"),
    { title: "Store!", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    click("button.inner"),
  ],
};
