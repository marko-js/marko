import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Thenables derived from input (not the nav promise) settle on different
// ticks: prefix first, then each body, with a click between frames.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: () => [
    { title: "Store", related: "hats", note: "ready", slow: false },
    click,
    navigate(
      { title: "Store!", related: "boots", note: "backordered", slow: true },
      click,
    ),
    click,
  ],
};
