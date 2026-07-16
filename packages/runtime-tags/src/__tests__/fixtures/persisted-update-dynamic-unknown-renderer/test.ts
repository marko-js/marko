import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const tickerItems = (container: Element) =>
  [...container.querySelectorAll("ol.ticker li")].map((li) => li.textContent);

// Deploy skew: a dispatched renderer id with no loader must surface through
// the `patch(fail)` sink instead of parking, while the page stays live.
const corruptRendererId = {
  mutateFrames: (frames: string[]) =>
    frames.map((frame) =>
      frame.replaceAll('tags/ticker.marko"', 'tags/ticker.marko-ghost"'),
    ),
};

const assertStaleTicker = (container: Element) => {
  assert.deepEqual(tickerItems(container), ["est", "cet"]);
};

export const config: TestConfig = {
  persisted: true,
  // The corrupted frame targets the debug renderer id; optimize encodes ids.
  skip_optimize: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      title: "Zones",
      view: "ticker",
      entries: ["est", "cet"],
      $global: { persisted: true },
    },
    clickCount,
    navigate(
      {
        title: "More Zones",
        view: "ticker",
        entries: ["est", "cet", "ist"],
        $global: { persisted: true },
      },
      corruptRendererId,
    ),
    assertStaleTicker,
    clickCount,
  ],
};
