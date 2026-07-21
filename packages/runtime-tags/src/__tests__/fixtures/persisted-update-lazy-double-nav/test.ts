import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const clickPanel = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.panel")!.click();

// Two navigations land while a `load=` module loads: parked applier state is
// per navigation, so only the newest navigation's data replays on ready.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    {
      title: "First",
      label: "alpha",
      warn: false,
      $global: { persisted: true },
    },
    clickCount,
    // Parks while the module is still unloaded...
    navigate({
      title: "Second",
      label: "beta",
      warn: false,
      $global: { persisted: true },
    }),
    // ...and is superseded before it ever replays.
    navigate({
      title: "Third",
      label: "gamma",
      warn: true,
      $global: { persisted: true },
    }),
    // Idle fires, the module loads, and the deferred replay must show only
    // the LAST navigation's values -- constructed `<if>` included.
    flushIdle,
    wait,
    clickPanel,
    // Loaded now: the merge dispatches directly and click state survives.
    navigate({
      title: "Fourth",
      label: "delta",
      warn: false,
      $global: { persisted: true },
    }),
    clickPanel,
  ],
};
