import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// A diverged branch nested inside a freshly constructed hop constructs from
// its own wire shell within the same navigation.
export const config: TestConfig = {
  persisted: true,
  // The label compute is server-only by design, so a plain client render of
  // the swapped-in widget is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home", widget: "x", topic: "sales" } },
    clickCount,
    // Cross-route hop into a fresh subtree nesting a diverged branch: the
    // client still possesses `WidgetX` from the home route's document render.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "dashboard",
        widget: "y",
        topic: "sales",
      },
    }),
    clickCount,
    // Cross-route back, reversing the nested miss with a changed server-only
    // label, so the applied content must be freshly rendered.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "home",
        widget: "x",
        topic: "growth",
      },
    }),
    clickCount,
  ],
};
