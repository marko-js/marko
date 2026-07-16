import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Loop keys disambiguate repeated instances of one compiled dynamic hop.
const items = (a: string, b: string) => [
  { id: 1, view: a },
  { id: 2, view: b },
];

export const config: TestConfig = {
  persisted: true,
  dom_bundle_excludes: ["server-only loop sentinel", "LOOP_ONLY_MARKUP"],
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, topic: "x", items: items("a", "b") } },
    clickCount,
    // Row 1 A->B; row 2 holds at B (must not false-fire on the shared site id).
    navigate({
      $global: { persisted: true, topic: "x", items: items("b", "b") },
    }),
    clickCount,
    // Reorder both existing keys and add a new key. The new row is delivered
    // as a resumable fragment; existing rows move and receive sparse merges.
    navigate({
      $global: {
        persisted: true,
        topic: "x",
        items: [
          { id: 2, view: "a" },
          { id: 3, view: "a" },
          { id: 1, view: "b" },
        ],
      },
    }),
    clickCount,
    // Remove the middle key and update the remaining keyed renderer.
    navigate({
      $global: {
        persisted: true,
        topic: "x",
        items: [
          { id: 1, view: "a" },
          { id: 2, view: "b" },
        ],
      },
    }),
  ],
};
