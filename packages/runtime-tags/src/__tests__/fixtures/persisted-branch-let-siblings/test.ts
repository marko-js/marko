import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(sel)!.click();
};

// Sibling stateful branches: each seeds through its OWN fill key — pairing
// preserves each branch's state independently and a re-construct of one
// never disturbs the other.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", a: true, b: true },
    click("button.ba"),
    click("button.bb"),
    { title: "Store!", a: true, b: true },
    { title: "Store!", a: false, b: true },
    { title: "Store!", a: true, b: true },
    click("button.ba"),
  ],
};
