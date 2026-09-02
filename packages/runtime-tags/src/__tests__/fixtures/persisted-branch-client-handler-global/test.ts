import type { TestConfig } from "../../main.test";

const show = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".step")!.click();
};
const read = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".read")!.click();
};

// A handler inside client-owned structure reading a `$global`-derived
// value: the derivation refreshes over the wire, so the handler reads the
// latest patch's title.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { title: "first", serializedGlobals: ["title"] } },
    show,
    read,
    { $global: { title: "second", serializedGlobals: ["title"] } },
    read,
  ],
};
