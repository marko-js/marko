import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

// The parent is lazy loaded when visible (an indefinite delay) while the
// nested grand-child's module loads eagerly. The grand-child's resume data
// references the parent's stream, so it must stay inert (halted at its
// dependency marker) until the parent becomes visible, then both resume.
export const config: TestConfig = {
  steps: [{}, wait, clickGrand, flushVisible, wait, clickGrand, clickChild],
  equivalent: false,
};

// Optional since the content does not exist client side until the parent
// becomes visible.
function clickChild(container: Element) {
  container.querySelector<HTMLButtonElement>(".child")?.click();
}

function clickGrand(container: Element) {
  container.querySelector<HTMLButtonElement>(".grand")?.click();
}
