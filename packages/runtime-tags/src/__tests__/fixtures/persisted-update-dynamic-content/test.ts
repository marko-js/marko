import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const clickToggle = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();

const inputA = {
  title: "Trailhead 40L Pack",
  summary: "A dependable pack for long hauls.",
  view: "overview",
  specs: [],
};

// Navigation target: the layout's `<${input.content}/>` hop renders a
// DIFFERENT content section (the run cross-route shape: two routes'
// otherwise-identical wrappers pass different page content through the same
// layout). The live page has never rendered `Specs`, so the update must
// swap in a fresh branch from the registered content and fill it (keyed
// loop included) from the patch.
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
    navigate({ ...inputB, $global: { persisted: true } }),
    clickCount,
    navigate({ ...inputA, $global: { persisted: true } }),
    clickToggle,
  ],
};
