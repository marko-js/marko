import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A class mixing a server tone with client state never captures (the fill
// recomputes both), pure-state classes stay client-owned, branch captures pair.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { tone: "info", show: true },
    click,
    { tone: "warn", show: true },
    click,
  ],
};
