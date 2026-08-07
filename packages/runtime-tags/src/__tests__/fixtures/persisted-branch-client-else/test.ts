import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Both arms of a client-owned chain read server values: each arm's fill
// dispatches only into the live selection, the hidden arm's value stays
// fresh for the next client flip, and the root read of the same value
// keeps its direct capture channel.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { yes: "y1", no: "n1" },
    click,
    { yes: "y2", no: "n2" },
    click,
    { yes: "y3", no: "n3" },
    click,
  ],
};
