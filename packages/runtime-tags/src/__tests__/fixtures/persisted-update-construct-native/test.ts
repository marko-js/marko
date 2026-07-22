import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// Native and component renderers share the same token-driven swap path.
export const config: TestConfig = {
  persisted: true,
  // The note compute is server-only by design, so a plain client render of
  // either branch is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "plain", topic: "sales" } },
    clickCount,
    // Native to component.
    navigate({ $global: { persisted: true, view: "widget", topic: "sales" } }),
    clickCount,
    // Component to native.
    navigate({ $global: { persisted: true, view: "plain", topic: "growth" } }),
    clickCount,
    // Native -> native (matched): no miss; the content hole fills
    // fine-grained through the ordinary patch.
    navigate({ $global: { persisted: true, view: "plain", topic: "trends" } }),
  ],
};
