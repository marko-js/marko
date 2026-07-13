import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const tapGadget = (container: Element) =>
  container.querySelector<HTMLButtonElement>(".gadget__tap")!.click();

// A `load=` lazy child INSIDE fragment-delivered content -- the whole
// document-render contract carried onto the fragment path:
//
// - The gadget's server-rendered HTML bakes into the fragment markup
//   (`writeWaitReady` keeps capturing when the current chunk is a fragment
//   capture) and shows immediately, before its module loads.
// - Its resume data rides the frame as a KEYED entry (`["<readyId>", ...]`
//   -- `writeReady`'s update branch), which the applier parks until the
//   module declares ready, exactly like a document's blocking `.b` channel.
// - Arrival fires the module's trigger-gated loader, registered under the
//   same ready id by the `?update` entry (`_load_ready`) -- the
//   data-driven stand-in for the trigger script a document injects. Here
//   that trigger is `idle`, so `flushIdle` is what starts the import.
// - Once ready, the parked batch replays against the walker-bound scopes:
//   event wiring fires (the tap button works) with server values intact.
//
// A repeat navigation (module already ready) replays its batch at the end
// of the apply, after the fragment walk binds the fresh subtree's node
// refs. The parent's `_update_load` dispatch stays suppressed for these
// shared fragment scopes (patch IS live) -- values are baked, so there is
// no patch to merge. Root client state survives throughout.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home", title: "", label: "" } },
    clickCount,
    // Cross-route hop: the detail content (lazy gadget included, its
    // markup baked) arrives as a fragment frame.
    navigate({
      $global: {
        persisted: true,
        persistedFragment: true,
        view: "detail",
        title: "Widget One",
        label: "alpha",
      },
    }),
    // The gadget's idle trigger fires (module loads, registering its
    // `?update` merge and declaring ready), the parked batch replays, and
    // the gadget's own client state works against the baked markup.
    flushIdle,
    wait,
    tapGadget,
    // Back to home (fragment swap away)...
    navigate({
      $global: {
        persisted: true,
        persistedFragment: true,
        view: "home",
        title: "",
        label: "",
      },
    }),
    // ...and to detail AGAIN: the module is ready now, so the fresh
    // fragment's batch replays at the end of the apply -- the new label
    // renders from the baked markup and the fresh gadget is immediately
    // interactive. Root client state survives throughout.
    navigate({
      $global: {
        persisted: true,
        persistedFragment: true,
        view: "detail",
        title: "Widget Two",
        label: "beta",
      },
    }),
    flushIdle,
    wait,
    tapGadget,
    clickCount,
  ],
};
