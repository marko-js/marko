import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickInc = (document: Document) =>
  document.querySelector<HTMLElement>("button.inc")!.click();

// A layout renders its body through `<${input.content}/>`: update merges must
// descend the hop by dispatching the serialized renderer id's merge.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { title: "Home", $global: { persisted: true } },
    clickInc,
    navigate({ title: "About", $global: { persisted: true } }),
    clickInc,
  ],
};
