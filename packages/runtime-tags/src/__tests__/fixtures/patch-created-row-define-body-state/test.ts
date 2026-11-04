import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body in rows a patch creates reads page state under a
// `<try>` and `<await>`.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { items: ["a"], value: resolveAfter("x", 1) },
    click,
    { items: ["a", "b"], value: resolveAfter("y", 2) },
    click,
    navigate(() => ({ items: ["c"], value: resolveAfter("z") })),
  ],
};
