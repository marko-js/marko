import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const clickPanel = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.panel")!.click();

// Async correctness audit, item 5 (designs/persisted-pages-roadmap.md
// "Correctness"): `load=` lazy tags meet persisted navigations.
//
// What this fixture pins green: the update response stays a valid frame
// stream on a page with a deferred asset (the document's idle-loader
// script is suppressed in update mode and the lazy child's ready-channel
// fills ride their own frame line -- see `writeScript`/`concatFrames` in
// html/writer.ts; before those fixes every navigation on a load= page
// produced an unparseable line and fell back to a full document load),
// navigations apply cleanly before AND after the lazy module loads, the
// module's deferred render (`queueAsyncRender`, a microtask -- strictly
// after the synchronous apply window, so it only ever sees a
// fully-applied frame) mounts fine, and the loaded child's click handlers
// and `<let>` state work throughout.
//
// The child is deliberately rendered through a dynamic tag. Its server-fed
// input follows navigations through the lazy dynamic merge queue:
// - The "beta" navigation lands while the module is still loading: its
//   patch PARKS on the pending queue and replays the moment the module
//   registers (the panel first paints already showing "beta" -- a
//   fine-grained text update, not a re-render).
// - The "gamma" navigation lands after load: the child's `?update` merge
//   (bundled into its lazy chunk, registered under the compile-constant
//   id both compiles derive) dispatches directly, with the panel's own
//   `<let>` click state preserved across both.
// Compare render-csr, where the same values flow through CSR re-renders.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    {
      title: "First",
      label: "alpha",
      show: true,
      $global: { persisted: true },
    },
    clickCount,
    // Patch applies while the lazy module is still unloaded.
    navigate({
      title: "Second",
      label: "beta",
      show: true,
      $global: { persisted: true },
    }),
    // Idle fires, the module loads, and its deferred render must show the
    // post-navigation value.
    flushIdle,
    wait,
    clickPanel,
    // The loaded child now updates fine-grained; its click state survives.
    navigate({
      title: "Third",
      label: "gamma",
      show: true,
      $global: { persisted: true },
    }),
    clickPanel,
  ],
};
