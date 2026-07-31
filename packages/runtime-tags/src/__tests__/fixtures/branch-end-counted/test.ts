import type { TestConfig } from "../../main.test";

// Multi-node loop items and `<if>` branches resume from the counted end
// marker alone (no start comments); reordering and destroying them after
// resume proves the walked-back ranges are right.
const press = (selector: string) => (document: Document) => {
  (document.querySelector(selector) as HTMLButtonElement).click();
};

export const config: TestConfig = {
  steps: [
    {},
    press("button.rev"),
    press("button.pop"),
    press("button.big"),
    press("button.big"),
  ],
};
