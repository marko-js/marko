import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// Nested tries, each with a stateful placeholder, resolving one flush apart
// after the entry ran: every placeholder mounts once and is destroyed by
// exactly its own body's arrival; state keeps flowing into what is shown.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, flush, click, wait, flush, click],
};
