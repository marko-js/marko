import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// Two updates land while the re-fired await is pending: the held region's
// writes coalesce (the release applies one mutation per target, skipping
// the superseded `<if>` branch entirely) while content outside the await
// updates immediately each flush.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, click, click, wait],
};
