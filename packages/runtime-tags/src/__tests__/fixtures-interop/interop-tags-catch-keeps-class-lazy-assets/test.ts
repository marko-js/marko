import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The caught body held the first instance's trigger script; the instance after
// the `<try>` still loads its module once the trigger fires.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  entry_delay: 1,
  steps: [{}, hoverBody, wait],
};

function hoverBody(document: Document) {
  const { defaultView } = document;
  document.body.dispatchEvent(new defaultView!.MouseEvent("mouseover"));
}
