import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A server-rendered read mixing a param with `$global` on a page with client
// state: without patches, no key changes, so the param is not serialized.
export const config: TestConfig = {
  steps: [
    { name: "a", $global: { suffix: "x", serializedGlobals: ["suffix"] } },
    click,
  ],
};
