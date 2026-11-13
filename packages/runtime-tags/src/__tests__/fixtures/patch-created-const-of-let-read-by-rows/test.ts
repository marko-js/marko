import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};
const user = { name: "Ann", token: "SECRET_token" };

// A `<const>` a loop's rows read derives from a `<let>` read whole: the scope a patch
// creates gets the `<const>`'s seed, as where main writes it, never the `<let>`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, user },
    { show: true, user },
    pickLast,
    { show: true, user },
    { show: false, user },
    { show: true, user },
  ],
};
