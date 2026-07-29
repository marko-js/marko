import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// A keyed loop owned by an `<if>` body: its construction anchor must be reserved
// from the loop's own analyze path so the route descriptor carries the id.
export const config: TestConfig = {
  persisted: true,
  dom_bundle_excludes: ["server-only task sentinel", "TASK_ROW_MARKUP"],
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, lane: "active", day: "mon" } },
    clickCount,
    // Adds a new head key (constructed), reorders the two live keys, and
    // updates their etas (fills into the moved branches).
    navigate({
      $global: { persisted: true, lane: "active", day: "tue" },
    }),
    clickCount,
    // Removes the constructed key; the survivors reorder and refill.
    navigate({
      $global: { persisted: true, lane: "active", day: "wed" },
    }),
  ],
};
