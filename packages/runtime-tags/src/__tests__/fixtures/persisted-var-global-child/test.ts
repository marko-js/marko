import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A var child with an always-write global hole: the call site keeps its
// ownership mask and child link, so globals refresh while the
// client-derived return's downstream stays withheld.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { locale: "en", serializedGlobals: ["locale"] } },
    click,
    { $global: { locale: "fr", serializedGlobals: ["locale"] } },
    click,
  ],
};
