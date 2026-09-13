import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(sel)!.click();
};

// A fill's run keeps client-owned work alone: a derivation whose reads the
// flush already patches or fills (here through a server function the
// client bundle only declares) is never recomputed from an arriving fill.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      $global: {
        data: { items: ["a", "b"] },
        serializedGlobals: { data: true },
      },
    },
    click(".count"),
    click(".open"),
    {
      $global: {
        data: { items: ["a", "b", "c"] },
        serializedGlobals: { data: true },
      },
    },
    click(".count"),
  ],
};
