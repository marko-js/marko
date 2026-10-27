import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const data = {
  items: [
    { id: "a", parts: ["x", "y"] },
    { id: "b", parts: ["y"] },
  ],
  owned: ["b"],
  bank: { x: 0, y: 1 },
  rate: 1,
};

// A lazy page's rows read a `$global`-derived value with client state: its
// owner ships no subscriber set, so no row names an id the client never registers.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { $global: { data: { player: data }, serializedGlobals: ["data"] } },
    wait,
    click,
  ],
};
