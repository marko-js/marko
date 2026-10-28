import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const data = (q: string, ids: string[]) => ({
  $global: { data: { q, items: ids.map((id) => ({ id })) } },
});
const hover = (document: Document) => {
  document
    .querySelector("li")!
    .dispatchEvent(new (document.defaultView as any).MouseEvent("mouseenter"));
};
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    data("cafe", ["1", "2"]),
    hover,
    navigate(() => data("park", ["1", "2"])),
    navigate(() => data("", ["2", "3"])),
    hover,
    navigate(() => data("cafe", ["1", "2"])),
    navigate(() => data("park", ["1"])),
  ],
};
