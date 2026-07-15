import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button:not(.bump)")!.click();
const clickBump = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.bump")!.click();

// Fresh branches created during a persisted apply must run statements
// joined on intersections whose members never fire client-side (promoted
// globals): the `<let/pair>` seed has no server-captured hole to fall back
// on, so a stalled `_or` join leaves it undefined.
export const config: TestConfig = {
  persisted: true,
  // Branch visibility is driven by $global, which CSR cannot re-render.
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        show: false,
        info: { a: "x", b: "y" },
        settings: [{ prefix: "P" }],
        serializedGlobals: { show: true, info: true, settings: true },
      },
    },
    clickCount,
    navigate({
      $global: {
        persisted: true,
        show: true,
        info: { a: "n", b: "m" },
        settings: [{ prefix: "Q" }],
        serializedGlobals: { show: true, info: true, settings: true },
      },
    }),
    clickBump,
    clickCount,
  ],
};
