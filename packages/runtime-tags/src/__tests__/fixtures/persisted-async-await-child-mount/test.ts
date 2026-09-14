import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A stateful child inside an await body constructed on an interactive page:
// the settling renderer sets the child up, so its setup entry is not
// applied again (one mount, one seed).
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { show: false, promise: Promise.resolve("A") },
    { show: true, promise: resolveAfter("A", 10) },
    inc,
  ],
};
