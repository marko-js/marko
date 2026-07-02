import type { TestConfig } from "../../main.test";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// $global reads promoted under the persisted option: text/attr holes,
// a $global-driven conditional, and a state ∩ $global intersection all get
// resume markers and spine serialization when `$global.persisted` is set,
// while values still read the live (serialized) global object.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        title: "Persisted Page",
        params: { id: 42, tag: "featured", sale: 20 },
        serializedGlobals: { title: true, params: true },
      },
    },
    clickButton,
    clickButton,
  ],
};
