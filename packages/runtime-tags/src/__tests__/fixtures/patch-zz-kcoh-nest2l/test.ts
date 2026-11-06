import type { TestConfig } from "../../main.test";
function click(d: Document) { d.querySelectorAll<HTMLElement>("section b, section i, section u").forEach(e => e.click()); }

export const config: TestConfig = { patches: true, steps: [{ show: false, label: "a", tag: "span" }, { show: true, label: "b", tag: "span" }, click, { show: true, label: "c", tag: "i" }, click] };
