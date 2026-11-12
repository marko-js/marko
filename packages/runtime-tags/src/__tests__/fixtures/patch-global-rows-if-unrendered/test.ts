import type { TestConfig } from "../../main.test";

const page = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });
const toggle = (document: Document) => {
  document.querySelector("button")!.click();
};

// Rows each owning a stateful `<if>` reading `$global`, one rendering its body: only that
// row subscribes, and a body the client renders later subscribes its owner.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b"), toggle, page("c")],
};
