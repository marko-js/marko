import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

const pick = (value: string) => (container: Element) => {
  const select = container.querySelector<HTMLSelectElement>("select.sort")!;
  const window = select.ownerDocument.defaultView!;
  select.value = value;
  select.dispatchEvent(new window.Event("input", { bubbles: true }));
};

// A controlled `<select>` with request-derived `<option>`s: the deferred value
// assertion re-selects after option values and the keyed reconcile land.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      sort: "relevance",
      options: [
        { key: "rel", id: "relevance", label: "Relevance" },
        { key: "price", id: "price-up", label: "Price" },
      ],
      $global: { persisted: true },
    },
    clickCount,
    navigate({
      sort: "rating-down",
      options: [
        { key: "rel", id: "best-match", label: "Best match" },
        { key: "price", id: "price-up", label: "Price" },
        { key: "rating", id: "rating-down", label: "Rating" },
      ],
      $global: { persisted: true },
    }),
    pick("price-up"),
    navigate({
      sort: "rating-down",
      options: [
        { key: "rel", id: "best-match", label: "Best match" },
        { key: "price", id: "price-up", label: "Price" },
        { key: "rating", id: "rating-down", label: "Rating" },
      ],
      $global: { persisted: true },
    }),
    clickCount,
  ],
};
