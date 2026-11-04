import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const toggle = (d: Document) =>
  d.querySelector<HTMLButtonElement>(".toggle")!.click();

// A load-on-render template the client's `<if>` renders, beside kept content: a patch
// renders the `<if>` for kept content only, so it waits on no module there.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, wait, toggle, { label: "c" }, wait],
};
