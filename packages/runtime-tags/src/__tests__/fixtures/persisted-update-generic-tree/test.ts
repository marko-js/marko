import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickBump = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.bump")!.click();
const clickCounter = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.counter")!.click();

const inputA = {
  heading: "Shipping",
  tone: "info",
  meta: "Ships in 2 days.",
  flagged: false,
  widget: "alerts",
};

const inputB = {
  heading: "Returns",
  tone: "warn",
  meta: "Free for 30 days.",
  flagged: true,
  widget: "digest",
};

// Nested child holes update while stateful child state and handlers survive.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    { ...inputA, $global: { persisted: true } },
    clickBump,
    clickCounter,
    navigate({ ...inputB, $global: { persisted: true } }),
    clickCounter,
    navigate({ ...inputA, $global: { persisted: true } }),
  ],
};
