import type { TestConfig } from "../../main.test";
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
// A `<define>` body destructuring a function its known call chooses by client state
// re-runs its script by its init, as a tag child does.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a" },
    click,
    { title: "b" },
    click,
    { title: "c" },
    { title: "c" },
  ],
};
