import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A lone request spread inside client-owned structure delivers through the
// spread read's own closure signal (a fill join), retained even when the
// owner declaration is shaken.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { attrs: { href: "/a" } },
    { attrs: { href: "/b", title: "B" } },
    click,
    { attrs: { href: "/c" } },
    click,
  ],
};
