import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A kept row's `<if>` creates the body again, whose content a `<define>` the
// row's dynamic tag renders reaches by its owner link on the resumed page.
export const config: TestConfig = {
  patches: true,
  steps: [
    { card: true, label: "a", tags: ["x"] },
    click,
    { card: true, label: "c", tags: ["y", "z"] },
    click,
    { card: false, label: "d", tags: ["z"] },
    click,
  ],
};
