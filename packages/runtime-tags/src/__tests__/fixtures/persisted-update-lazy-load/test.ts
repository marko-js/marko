import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const clickPanel = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.panel")!.click();

// `load=` lazy tags meet persisted navigations: the update stream stays a
// valid frame stream, parked patches replay on load, then direct dispatch.
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
