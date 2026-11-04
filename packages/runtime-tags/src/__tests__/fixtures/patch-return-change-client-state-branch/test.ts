import type { TestConfig } from "../../main.test";

const pickB = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".mode")!.click();
};
const go = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".go")!.click();
};
const assign = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".set")!.click();
};

// In a branch a flush may create, the created child's init sets the state-picked
// `<return>` handler: the paired child keeps the handler the client picked.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, p: "x" },
    pickB,
    // The paired child's handler reads the `p` this patch changes.
    { show: true, p: "y" },
    assign,
    // A created child's join of its bound handlers inits itself: `.go` has one,
    // which takes its click event as the value (`a[object PointerEvent]`).
    { show: false, p: "z" },
    { show: true, p: "z" },
    go,
    pickB,
    assign,
  ],
};
