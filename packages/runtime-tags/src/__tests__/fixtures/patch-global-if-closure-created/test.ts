import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A client-created template reading a `$global` key only inside its own
// `<if>` subscribes as it is created, so a patch changing the key updates it.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    click(".a"),
    click(".b"),
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
  ],
};
