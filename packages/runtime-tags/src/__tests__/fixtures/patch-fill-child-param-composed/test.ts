import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const data = (q: string, ids: string[]) => ({
  $global: { data: { q, items: ids.map((id) => ({ id })) } },
});

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A child both fed by the server and rendered by the client: the server-fed
// one's rows join `input.data` in a fill, so a patch must keep it current.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    data("a", ["1", "2"]),
    navigate(() => data("b", ["3"])),
    toggle,
  ],
};
