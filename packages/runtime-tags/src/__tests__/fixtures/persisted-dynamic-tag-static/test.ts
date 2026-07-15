import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// A reason-less dynamic tag (`<${Wrapper}>` over a static module const)
// renders once and can never change on navigation, so it does not
// participate in persisted update renders: no per-site register id is
// requested (this previously crashed the persisted html compile with the
// register-id tripwire) and no dynamic merge compiles. The `$global`
// caption keeps navigations observable around it.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        caption: "Home",
        serializedGlobals: { caption: true },
      },
    },
    clickButton,
    navigate({
      $global: {
        persisted: true,
        caption: "Detail",
        serializedGlobals: { caption: true },
      },
    }),
    clickButton,
  ],
};
