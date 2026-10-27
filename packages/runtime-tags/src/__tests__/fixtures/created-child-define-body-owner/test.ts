import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// patch-created-child-define-body-owner without patches: the client renders the
// child, whose own `<define>` body reads the child's state.
export const config: TestConfig = {
  skip_ssr: true,
  steps: [{ show: false }, { show: true }, click],
};
