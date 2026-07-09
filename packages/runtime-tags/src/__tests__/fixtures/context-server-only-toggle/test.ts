import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (container: Element) =>
    container.querySelector<HTMLButtonElement>(selector)!.click();
}

export const config: TestConfig = {
  steps: [
    { $global: { theme: "light" } },
    click("button.show"),
    click("button.show"),
    click("button.show"),
    click("button.add"),
    click("button.add"),
  ],
  // The provider's value expression stays server-side; only its computed
  // value reaches the client (in the reserved box).
  bundle_excludes: { dom: ["toggle_context_sentinel"] },
};
