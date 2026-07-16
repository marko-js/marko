import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const tapGadget = (container: Element) =>
  container.querySelector<HTMLButtonElement>(".gadget__tap")!.click();

// A lazy child inside a fragment initializes through its keyed ready batch.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home", title: "", label: "" } },
    clickCount,
    // The lazy gadget arrives as server-rendered fragment markup.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "detail",
        title: "Widget One",
        label: "alpha",
      },
    }),
    // The idle load replays resume data against the promoted fragment scopes.
    flushIdle,
    wait,
    tapGadget,
    // Back to home (fragment swap away)...
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "home",
        title: "",
        label: "",
      },
    }),
    // With the module ready, the next fragment initializes in the same apply.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
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
