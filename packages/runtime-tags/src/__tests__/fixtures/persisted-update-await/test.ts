import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickButton = (document: Document) =>
  document.querySelector("button")!.click();

const inputA = {
  title: "Trailhead 40L Pack",
  related: [
    { id: 11, name: "Rain Cover", price: 24.5 },
    { id: 12, name: "Hip Belt", price: 39 },
  ],
  note: "Ships tomorrow",
};

// Navigation target: the title changes in the first frame while both async
// boundaries' bodies arrive in later frames, in resolution order.
const inputB = {
  title: "Summit 65L Pack",
  related: [
    { id: 12, name: "Hip Belt", price: 39 },
    { id: 21, name: "Ice Axe Loop", price: 11.5 },
  ],
  note: "Backordered",
};

// Pins frame-by-frame settling across async boundaries: request-derived holes
// first, each awaited body as its frame lands, with client state surviving.
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
