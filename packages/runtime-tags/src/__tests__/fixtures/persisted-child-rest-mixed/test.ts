import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A rest-consumed child merges every feed into one group; the server-fed
// title still delivers through its fill while client state stays live.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "Store" }, click, { title: "Store!" }, click],
};
