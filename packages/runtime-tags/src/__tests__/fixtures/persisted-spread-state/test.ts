import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A spread mixing a request object with client state is a state-fed
// intersection: the request part fills, the join re-applies the set on
// the client, and a construct paints from both.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, attrs: { href: "/a", title: "A" } },
    click,
    { show: true, attrs: { href: "/b" } },
    { show: false, attrs: { href: "/b" } },
    { show: true, attrs: { href: "/c", title: "C" } },
    click,
  ],
};
