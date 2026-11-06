import type { TestConfig } from "../../main.test";
function clickTag(d: Document) { d.querySelector<HTMLElement>("section > span, section > i")!.click(); }
export const config: TestConfig = { patches: true, steps: [{ show: false, label: "a", tag: "span" }, { show: true, label: "b", tag: "span" }, clickTag, { show: true, label: "c", tag: "i" }, clickTag] };
