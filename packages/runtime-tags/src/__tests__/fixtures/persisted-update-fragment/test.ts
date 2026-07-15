import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const clickToggle = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();
const clickWidget = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.widget")!.click();
const clickBump = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.bump")!.click();

// Fragment frames (see designs/persisted-pages-architecture.md, "Fragment frames"): with
// `$global.persistedCrossRoute` the update render delivers the first
// content-hop branch as resumable HTML instead of serializing it for
// client-side construction from registered renderer graphs. The applier
// inserts the markup at the hop's anchor and resumes it -- the walked
// scopes join the live tree, so the fragment's effects run, later
// same-route updates fill it fine-grained, and a later fragment swap
// destroys it cleanly. Everything above the hop stays a matched-scope
// patch throughout.
export const config: TestConfig = {
  // Fragment-first (the run router's contract): the persisted entry ships
  // no fills-path construction material -- the define contents' render
  // graphs tree-shake out of the update chunk (see sizes.json), and the
  // hop's update merge compiles without a replay path.
  persisted: true,
  dom_bundle_excludes: [
    "getSession",
    "getMetrics",
    "hello ",
    "views",
    "sales",
    "welcome home",
    "admin tools enabled",
  ],
  // The computes are server-only by design, so a plain client render of
  // this template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    // Cross-route hop: the dashboard content arrives as a fragment frame
    // (text/attr holes baked into the markup; scope data on the ordinary
    // fills). The widget's effects must run for the walker-built scopes.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "dashboard",
        user: "ada",
        range: "day",
        focus: "views",
        admin: false,
        seed: 5,
        step: 2,
        serializedGlobals: { seed: true, step: true },
      },
    }),
    clickWidget,
    // The dom-less store: its apply-time effect seeded tally to 5; the
    // bump goes through its change handler, which reads $global -- both
    // require the stamped identity fragment entries carry for scopes the
    // markup never references.
    clickBump,
    clickToggle,
    // Same-route update, no fragment: ordinary fine-grained fills into the
    // fragment-built subtree (keyed loop gains a branch, active class
    // moves, conditional turns on, child input changes) while the widget's
    // ephemeral click count survives.
    navigate({
      $global: {
        persisted: true,
        view: "dashboard",
        user: "grace",
        range: "week",
        focus: "clicks",
        admin: true,
        seed: 5,
        step: 2,
        serializedGlobals: { seed: true, step: true },
      },
    }),
    clickWidget,
    clickBump,
    // Cross-route back: a fragment replacing a fragment-built branch.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "home",
      },
    }),
    clickCount,
    clickToggle,
  ],
};
