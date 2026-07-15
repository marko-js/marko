import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const clickPanel = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.panel")!.click();

// TWO navigations land while a `load=` module is still loading. Parked
// applier state (lazy-child patches, keyed resume batches) is per navigation:
// a new navigation's `createUpdate` clears it, so when the module finally
// declares ready only the NEWEST navigation's data replays -- the first
// navigation's parked patch must never reach the post-second-navigation page
// (matched scopes survive navigations with truthy generations, so the replay
// gates alone would let it through).
//
// The second navigation also flips the panel's request-derived `<if>` on, so
// its parked patch carries a fragment entry that is only consumed at REPLAY
// time: replays run outside any apply frame, so the ready-flush must
// reinstall the owning navigation's applier context (without it,
// `applyFragment` dereferences an undefined context and the warning never
// appears). After the load, direct dispatch takes over: the `<if>` tears back
// down and the panel's own click state survives further navigations.
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
    // the LAST navigation's values -- fragment-delivered `<if>` included.
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
