import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A pure-state test is client-owned structure: frames omit the branch entry
// and patch renders skip the body, while the server value inside delivers as
// an owner fill — so a branch revealed by the client renders the latest
// server title, and client selection survives every patch.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }, click],
};
