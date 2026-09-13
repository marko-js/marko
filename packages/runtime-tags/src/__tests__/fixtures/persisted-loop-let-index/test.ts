import type { TestConfig } from "../../main.test";

const click = (nth: number) => (document: Document) => {
  document.querySelectorAll<HTMLButtonElement>("button")[nth].click();
};

// Index-keyed loop (implicit keys on the wire) with item-local state:
// positions pair and keep client state, appended items construct with
// their seed, and truncate + regrow comes back fresh.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { labels: ["Apples", "Bread"] },
    click(0),
    { labels: ["Apples", "Bread", "Milk"] },
    click(2),
    { labels: ["Apples"] },
    { labels: ["Apples", "Bread", "Milk"] },
  ],
};
