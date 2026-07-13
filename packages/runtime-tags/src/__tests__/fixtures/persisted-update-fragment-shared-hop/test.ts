import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const clickBump = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.bump")!.click();

// Cross-route fragment capture below a matched shared hop (see
// template.marko): the echo-proven frame hop stays a matched patch and
// the divergence one hop deeper takes the fragment.
export const config: TestConfig = {
  persisted: true,
  // Possession proofs need the html runtime's hop-site stashes; a client
  // render never writes them.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home", user: "ada" } },
    clickCount,
    // Cross-route: the fragment captures at the layout hop; the frame
    // subtree above it stays matched, so `count` survives.
    navigate({
      $global: {
        persisted: true,
        persistedFragment: true,
        view: "dashboard",
        user: "ada",
      },
    }),
    clickBump,
    // Same-route: fine-grained fills into the fragment-built subtree (the
    // greeting hole) while both client states survive.
    navigate({
      $global: { persisted: true, view: "dashboard", user: "grace" },
    }),
    // Cross-route back: a fragment replacing a fragment-built branch, with
    // the frame subtree still matched throughout.
    navigate({
      $global: {
        persisted: true,
        persistedFragment: true,
        view: "home",
        user: "grace",
      },
    }),
    clickCount,
  ],
};
