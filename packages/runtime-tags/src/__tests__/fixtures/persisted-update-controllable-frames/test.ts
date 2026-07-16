import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

const type = (value: string) => (container: Element) => {
  const input = container.querySelector<HTMLInputElement>("input.sku")!;
  const window = input.ownerDocument.defaultView!;
  input.value = value;
  input.dispatchEvent(new window.Event("input", { bubbles: true }));
};

const pick = (value: string) => (container: Element) => {
  const select = container.querySelector<HTMLSelectElement>("select.ship")!;
  const window = select.ownerDocument.defaultView!;
  select.value = value;
  select.dispatchEvent(new window.Event("input", { bubbles: true }));
};

// Controllable captures re-dispatch every frame of a multi-frame navigation,
// so asserts must gate on the captured value changing; user edits survive.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      sku: "AB-100",
      ship: "air",
      eta: "3 days",
      tick: 1,
      $global: { persisted: true },
    },
    flush,
    clickCount,
    type("AB-100-custom"),
    pick("sea"),
    navigate(
      {
        sku: "AB-100",
        ship: "air",
        eta: "1 week",
        tick: 4,
        $global: { persisted: true },
      },
      type("AB-edited-mid-stream"),
    ),
    navigate(
      {
        sku: "CD-200",
        ship: "ground",
        eta: "2 days",
        tick: 8,
        $global: { persisted: true },
      },
      type("CD-edited-mid-stream"),
    ),
    clickCount,
  ],
};
