import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Two hops diverge in one navigation but only the first capture may hold
// async content: row 2's pending boundary must abort the whole apply.
const items = (a: string, b: string) => [
  { id: 1, view: a },
  { id: 2, view: b },
];

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  error_html: true,
  steps: [
    { $global: { persisted: true, topic: "x", items: items("a", "b") } },
    clickCount,
    // Row 1 (sync) A->B and row 2 (async) B->Async at once.
    navigate({
      $global: { persisted: true, topic: "x", items: items("b", "c") },
    }),
  ],
};
