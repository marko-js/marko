import type { TestConfig } from "../../main.test";

const node = (id: string, kid?: true) => ({
  name: "SHOWN_" + id,
  secret: "SECRET_" + id,
  kid: kid && { name: "SHOWN_kid" + id, secret: "SECRET_kid" + id },
});

// A template rendering itself in content a dynamic tag selects: its shell
// composes, so a patch creating it ships what it renders, never its input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { deep: false, node: node("1", true) },
    { deep: true, node: node("2", true) },
    { deep: true, node: node("3") },
    { deep: true, node: node("4", true) },
  ],
};
