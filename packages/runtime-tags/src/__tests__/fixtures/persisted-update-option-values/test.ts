import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector("button")!.click();

// Request-derived `<option value>` holes must ride persisted updates: a
// matched option (stable key) with a changed id, plus a fresh option from
// the keyed reconcile, both need the captured value placed. Selection
// re-sync under an unchanged select value is a recorded follow-up.
export const config: TestConfig = {
  persisted: true,
  // The option list is driven by $global, which CSR cannot re-render.
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        cfg: [
          {
            options: [
              { key: "rel", id: "relevance", label: "Relevance" },
              { key: "price", id: "price-up", label: "Price" },
            ],
          },
        ],
        serializedGlobals: { cfg: true },
      },
    },
    clickCount,
    navigate({
      $global: {
        persisted: true,
        cfg: [
          {
            options: [
              { key: "rel", id: "best-match", label: "Best match" },
              { key: "price", id: "price-up", label: "Price" },
              { key: "rating", id: "rating-down", label: "Rating" },
            ],
          },
        ],
        serializedGlobals: { cfg: true },
      },
    }),
    clickCount,
  ],
};
