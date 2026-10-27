import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A branch a patch creates composes a child whose own `<define>` body reads the
// child's state: the body's hop names the child, not the branch, as its owner.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, click],
};
