import type { TestConfig } from "../../main.test";
export const config: TestConfig = { patches: true, steps: [{ tag: "span", rows: [] }, { tag: "span", rows: [{ id: 1, label: "a" }, { id: 2, label: "b" }] }, { tag: "i", rows: [{ id: 2, label: "c" }, { id: 3, label: "d" }] }] };
