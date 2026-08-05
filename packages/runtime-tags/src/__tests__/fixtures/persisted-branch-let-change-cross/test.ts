import type { TestConfig } from "../../main.test";

// A change handler from ANOTHER section would bind its factory to the
// wrong scope on construct, so the shell drops: pairing still patches,
// and diverging to the branch rejects (a document navigation).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
  ],
};
