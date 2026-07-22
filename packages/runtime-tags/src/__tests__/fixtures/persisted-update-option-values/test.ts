import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector("button")!.click();

// Request-derived `<option value>` holes ride persisted updates for matched
// and fresh options; with no `value=` the user's selection stays client-owned.
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
