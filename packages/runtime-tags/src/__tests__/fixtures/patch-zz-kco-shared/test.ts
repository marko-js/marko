import type { TestConfig } from "../../main.test";
export const config: TestConfig = { patches: true, steps: [{ show: false, label: "a", tag: "span" }, { show: true, label: "a label long enough to share", tag: "span" }, { show: true, label: "another label long enough", tag: "i" }] };
