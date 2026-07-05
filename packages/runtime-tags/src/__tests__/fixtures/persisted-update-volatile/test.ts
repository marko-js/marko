import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// Render-once contract for expressions outside the sanctioned server
// channels: values derived from nothing the source lattice tracks (impure
// calls like `new Date()` -- simulated here with a deterministic counter)
// are computed at page load and persisted navigations never refresh them,
// both inline and through a `<const>` -- matching the client reactive
// model, where nothing drives a refs-less expression. Data the server
// should refresh must be read from `$global` or input (`title` refreshes
// below; the stamps must not). Client state (`count`) survives.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  skip_csr: true,
  steps: [
    { title: "First", $global: { persisted: true } },
    clickButton,
    navigate({ title: "Second", $global: { persisted: true } }),
    clickButton,
  ],
};
