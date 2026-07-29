import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const clickToggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
const assertNoContentRegistryRefs = (frames: string[]) => {
  assert.doesNotMatch(frames.join("\n"), /content:_(?:\._|\(\d+,)/);
  return frames;
};

const inputA = {
  title: "Trailhead 40L Pack",
  summary: "A dependable pack for long hauls.",
  view: "overview",
  specs: [],
};

// Cross-route navigation swaps page content through the shared layout.
const inputB = {
  title: "Summit 65L Pack",
  summary: "",
  view: "specs",
  specs: [
    { name: "volume", value: "65L" },
    { name: "weight", value: "1.9kg" },
  ],
};

export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    { ...inputA, $global: { persisted: true } },
    clickCount,
    clickToggle,
    navigate(
      { ...inputB, $global: { persisted: true } },
      { mutateFrames: assertNoContentRegistryRefs },
    ),
    clickCount,
    navigate(
      { ...inputA, $global: { persisted: true } },
      { mutateFrames: assertNoContentRegistryRefs },
    ),
    clickToggle,
  ],
};
