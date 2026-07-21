import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector("button")!.click();
const clickToggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();

const inputA = {
  label: "New",
  tone: "info",
  panel: { title: "Shipping", body: "Ships in 2 days.", expanded: true },
  name: "alerts",
};

const inputB = {
  label: "Sale",
  tone: "warn",
  panel: { title: "Returns", body: "Free for 30 days.", expanded: false },
  name: "digest",
};

// Known child holes update while interactive child state and handlers survive.
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
    clickToggle,
    navigate({ ...inputA, $global: { persisted: true } }),
  ],
};
