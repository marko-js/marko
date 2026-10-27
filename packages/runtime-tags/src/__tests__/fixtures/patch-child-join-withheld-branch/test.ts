import type { TestConfig } from "../../main.test";
const click = (sel: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(sel)!.click();
// A written join in content a consumer withholds by client state: where the
// content is live, the members' unpatched keys re-run it (census B19).
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "p", y: "q", show: true },
    click("button.m"),
    { x: "r", y: "s", show: true },
    click("button.n"),
    { x: "t", y: "u", show: true },
    click("button.m"),
    { x: "v", y: "w", show: true },
    click("button.m"),
    { x: "a", y: "b", show: true },
  ],
};
