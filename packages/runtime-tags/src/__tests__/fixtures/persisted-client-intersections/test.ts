import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Direct captures, a child state intersection (fill; counter survives), an
// unassigned `<let>` child (prunes to a constant, so no fill registers), and
// a statically-fed child whose potential fill is inert (never registered).
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      title: "Store",
      label: "Widget",
      year: 2026,
      $global: { brand: "Acme", locale: "en" },
    },
    click,
    {
      title: "Store!",
      label: "Gadget",
      year: 2027,
      $global: { brand: "Acme Co", locale: "fr" },
    },
    click,
  ],
};
