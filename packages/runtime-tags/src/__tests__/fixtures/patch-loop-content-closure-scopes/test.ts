import type { TestConfig } from "../../main.test";

const panels = (s: string) =>
  [0, 1, 2].map((id) => ({ id, label: `L${id}${s}`, text: `T${id}${s}` }));

// Loop rows pass server-only content to a child rendering it in its root: the
// patch fills the content's read, so no row ships a closure-scope set for it.
export const config: TestConfig = {
  patches: true,
  steps: [{ panels: panels("a") }, { panels: panels("b") }],
};
