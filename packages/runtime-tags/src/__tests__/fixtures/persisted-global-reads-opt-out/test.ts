import type { TestConfig } from "../../main.test";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// Same template as persisted-global-reads compiled with the persisted option,
// but rendered without `$global.persisted` (the crawler opt-out): no promoted
// markers or spine may appear in the output.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      $global: {
        title: "Persisted Page",
        params: { id: 42, tag: "featured", sale: 20 },
        serializedGlobals: { title: true, params: true },
      },
    },
    clickButton,
    clickButton,
  ],
};
