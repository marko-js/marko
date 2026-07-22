import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const clickBump = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.bump")!.click();

// Divergence below a matched shared hop: the matched hop stays a sparse
// patch and the divergence one hop deeper constructs from its wire shell.
export const config: TestConfig = {
  persisted: true,
  // Possession proofs need the html runtime's hop-anchor stashes; a client
  // render never writes them.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home", user: "ada" } },
    clickCount,
    // Cross-route: the construction happens at the layout hop; the frame
    // subtree above it stays matched, so `count` survives.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "dashboard",
        user: "ada",
      },
    }),
    clickBump,
    // Same-route: fine-grained fills into the constructed subtree (the
    // greeting hole) while both client states survive.
    navigate({
      $global: { persisted: true, view: "dashboard", user: "grace" },
    }),
    // Cross-route back: a constructed branch replacing a constructed branch, with
    // the frame subtree still matched throughout.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "home",
        user: "grace",
      },
    }),
    clickCount,
  ],
};
