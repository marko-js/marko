import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// Repeated hops between constructed panels keep the page live throughout.
const assertPanel = (selector: string, text: string, count: number) => {
  return (document: Document) => {
    assert.equal(document.querySelector(selector)?.textContent, text);
    assert.equal(
      document.querySelector("button.count")!.textContent,
      `clicked ${count}`,
    );
  };
};

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "a", topic: "sales" } },
    clickCount,
    navigate({ $global: { persisted: true, view: "b", topic: "sales" } }),
    assertPanel("section.b", "Panel B: sales report", 1),
    clickCount,
    navigate({ $global: { persisted: true, view: "a", topic: "growth" } }),
    assertPanel("p.a", "Panel A: growth report", 2),
    // A reasonless server-only hole must fill the constructed panel.
    (document: Document) => {
      assert.equal(
        document.querySelector("em.a3")!.textContent,
        "always in stock",
      );
    },
  ],
};
