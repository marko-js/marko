import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An `<await>` body in a `<define>` body reads the body's param and template
// state: settling after a click, it subscribes to both, so it shows the
// latest of each.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { id: "a", value: resolveAfter("x", 1) },
    click,
    navigate(() => ({ id: "b", value: resolveAfter("y", 2) })),
    click,
    { id: "c", value: Promise.resolve("z") },
  ],
};
