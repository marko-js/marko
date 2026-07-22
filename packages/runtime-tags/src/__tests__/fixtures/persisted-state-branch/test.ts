import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const click = (sel: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(sel)!.click();
const clickToggle = click("button.toggle");
const clickCount = click("button.count");
const clickAdd = click("button.add");

// Purely state-driven branches never join update payloads, so their owners
// link from resume markers; pins that chain through resume and navigation.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { title: "First", $global: { persisted: true } },
    clickCount,
    navigate({ title: "Second", $global: { persisted: true } }),
    clickCount,
    clickToggle,
    clickToggle,
    clickCount,
    clickAdd,
  ],
};
