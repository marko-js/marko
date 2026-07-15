import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const click = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button")!.click();

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  dom_bundle_excludes: ["getTitle", "server title"],
  steps: [
    { id: 1, kind: "native", tag: "div", $global: { persisted: true } },
    click,
    navigate({
      id: 2,
      kind: "dynamic",
      tag: "span",
      $global: { persisted: true },
    }),
    click,
    navigate({
      id: 3,
      kind: "custom",
      tag: "span",
      $global: { persisted: true },
    }),
    click,
  ],
};
