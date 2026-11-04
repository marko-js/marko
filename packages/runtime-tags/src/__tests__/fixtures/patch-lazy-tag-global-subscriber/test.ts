import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A lazy child's client read of a `$global` key subscribes inside its ready
// data: a patch changing the key re-renders the resumed child.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    wait,
    click,
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
    wait,
  ],
};
