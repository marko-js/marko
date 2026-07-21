import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (document: Document) =>
  document.querySelector("button")!.click();

const inputA = {
  product: {
    name: "Trailhead 40L Pack",
    slug: "trailhead-40",
    featured: true,
    sale: { percent: 20 },
  },
  related: [
    { id: 11, name: "Rain Cover", price: 24.5 },
    { id: 12, name: "Hip Belt", price: 39 },
    { id: 13, name: "Dry Sack", price: 14.25 },
  ],
};

// Navigation target: name/slug/featured change, the sale flips off, and the
// related list reorders + adds + removes (keyed reconcile).
const inputB = {
  product: {
    name: "Summit 65L Pack",
    slug: "summit-65",
    featured: false,
    sale: null,
  },
  related: [
    { id: 12, name: "Hip Belt", price: 39 },
    { id: 21, name: "Ice Axe Loop", price: 11.5 },
    { id: 13, name: "Dry Sack", price: 14.25 },
  ],
};

// Resume page A, flip client state, then `navigate(inputB)`: effects must not
// replay for matched scopes and client state survives the payload's default.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    { ...inputA, $global: { persisted: true } },
    clickButton,
    navigate({ ...inputB, $global: { persisted: true } }),
    clickButton,
    navigate({ ...inputA, $global: { persisted: true } }),
  ],
};
