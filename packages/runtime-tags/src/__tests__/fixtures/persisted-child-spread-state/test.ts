import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#o")!.click();
};

// Spreads meeting client state: inside client-owned structure the request
// object fills the child; a spread mixing state recomputes on the client
// with the request part filled.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { props: { title: "A" }, badge: { label: "b1" } },
    toggle,
    { props: { title: "B" }, badge: { label: "b2" } },
    toggle,
  ],
};
