import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

// A `<let>` a loop's rows read only a member of: the scope a patch creates gets that
// member's seed, as where main writes it, and none of the rest.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, token: "SECRET_token" },
    { show: true, token: "SECRET_token" },
    pickLast,
    { show: true, token: "SECRET_token" },
    { show: false, token: "SECRET_token" },
    { show: true, token: "SECRET_token" },
  ],
};
