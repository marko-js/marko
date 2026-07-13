import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// A possession miss firing INSIDE an active fragment capture, not at its own
// top-level hop. `Widget` is one shared component (one build-stable site id)
// invoked from both `Home` and `Dashboard`; the document render possesses it
// as `WidgetX` while on the home route. Navigating cross-route to the
// dashboard is a fresh subtree (`state.fragments`, the whole diverging
// branch captured once at the outer `<${...}/>` hop), and that fresh subtree
// wants `WidgetY` at the very same site the client still possesses `WidgetX`
// for -- a possession miss whose hop is nested inside the fragment already
// being captured (`$chunk.fragment`).
//
// Without suppressing the nested capture, `Widget`'s hop takes its own
// (detached) fragment: its branch brackets land in the enclosing Dashboard
// fragment's markup, but its body renders onto a separate detached chunk
// whose entry can never apply (fragment subtree scopes are shared patch/live
// objects, so the applier's mismatch guard is always already-equal) --
// the dashboard would resume with the widget's brackets empty. The fix
// renders nested hops inline into the enclosing capture instead, so the
// dashboard's fragment carries the widget's markup directly.
export const config: TestConfig = {
  persisted: true,
  // The label compute is server-only by design, so a plain client render of
  // the swapped-in widget is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home", widget: "x", topic: "sales" } },
    clickCount,
    // Cross-route hop into a fresh subtree that nests a possession miss:
    // `Widget` renders `WidgetY` here, but the client still possesses
    // `WidgetX` from the home route's document render.
    navigate({
      $global: {
        persisted: true,
        persistedFragment: true,
        view: "dashboard",
        widget: "y",
        topic: "sales",
      },
    }),
    clickCount,
    // Cross-route back, reversing the nested possession miss (WidgetY ->
    // WidgetX) and changing the server-only label so the applied content
    // must be freshly rendered, not stale.
    navigate({
      $global: {
        persisted: true,
        persistedFragment: true,
        view: "home",
        widget: "x",
        topic: "growth",
      },
    }),
    clickCount,
  ],
};
