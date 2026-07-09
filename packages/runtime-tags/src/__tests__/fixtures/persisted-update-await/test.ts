import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

const inputA = {
  title: "Trailhead 40L Pack",
  related: [
    { id: 11, name: "Rain Cover", price: 24.5 },
    { id: 12, name: "Hip Belt", price: 39 },
  ],
  note: "Ships tomorrow",
};

// Navigation target: the title changes immediately (first frame) while both
// async boundaries' bodies arrive in later frames, in resolution order --
// the related list reorders + adds + removes (keyed reconcile inside an
// `<await>` under a `<try>` placeholder), and the bare `<await>` note swaps.
const inputB = {
  title: "Summit 65L Pack",
  related: [
    { id: 12, name: "Hip Belt", price: 39 },
    { id: 21, name: "Ice Axe Loop", price: 11.5 },
  ],
  note: "Backordered",
};

// Persisted single-page navigation across async boundaries: the harness
// applies the update payload one frame at a time (the streaming model), so
// snapshots show the page settling frame by frame -- request-derived holes
// first, each awaited body as its frame lands. Clicks prove client state
// survives and effects are not replayed for matched scopes.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    { ...inputA, $global: { persisted: true } },
    // Settle both async boundaries so the live page has resolved branches
    // for the update to pair with before navigating.
    flush,
    flush,
    clickButton,
    navigate({ ...inputB, $global: { persisted: true } }),
    clickButton,
    navigate({ ...inputA, $global: { persisted: true } }),
  ],
};
