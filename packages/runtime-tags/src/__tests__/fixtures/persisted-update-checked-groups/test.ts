import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLInputElement>(selector)!.click();

// `checked`/`checkedValue` in persisted updates: captured groups re-assert
// only when the server value changed versus what a patch previously asserted.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      plan: "basic",
      ship: "ground",
      extras: ["warranty"],
      gift: false,
      promo: "SAVE10",
      promoCode: "SAVE10",
      $global: { persisted: true },
    },
    click("input.plan-pro"),
    click("input.extra-setup"),
    click("input.gift"),
    // Unchanged values: every user toggle above survives the navigation.
    navigate({
      plan: "basic",
      ship: "ground",
      extras: ["warranty"],
      gift: false,
      promo: "SAVE10",
      promoCode: "SAVE10",
      $global: { persisted: true },
    }),
    click("button.count"),
    // Changed values: the server wins the plan and ship groups and the
    // extras membership, while the still-unchanged gift keeps the user's on.
    navigate({
      plan: "max",
      ship: "air",
      extras: ["setup"],
      gift: false,
      promo: "SAVE20",
      promoCode: "SAVE20",
      $global: { persisted: true },
    }),
    // Controlled group: the handler reports the click and the group snaps
    // back to the patched value ("air"), proving the controlled value moved.
    click("input.ship-ground"),
    // Uncontrolled group: the user can still move it after the navigation.
    click("input.plan-basic"),
    click("button.count"),
  ],
};
