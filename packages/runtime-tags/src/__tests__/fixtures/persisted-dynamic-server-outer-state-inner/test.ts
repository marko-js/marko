import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server-owned outer site around a state-fed known child: the label
// patches while the site holds, and when the site's renderer changes the
// body constructs from its record (its renderer alone cannot build the
// paired child) with the child seeded.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { label: "one", on: true, items: [] },
    { label: "two", on: true, items: [] },
    click,
    { label: "three", on: false, items: [] },
    click,
    { label: "four", on: true, items: [] },
  ],
};
