import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLAnchorElement>("a")!.click();
};

// A spread carrying a bound handler: the entry's set rides the bind table,
// so the handler survives a patch and a construct.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, attrs: { href: "/a" } },
    click,
    { show: true, attrs: { href: "/b" } },
    click,
    { show: false, attrs: { href: "/b" } },
    { show: true, attrs: { href: "/c" } },
    click,
  ],
};
