import type { TestConfig } from "../../main.test";

const node = (id: string) => ({
  name: "a" + id,
  kid: { name: "b" + id, kid: { name: "c" + id } },
});

// Two templates rendering each other in an `<if>`: the one closing the import
// cycle renders the other as a dynamic tag, which a created `<if>` creates.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, node: node("1") },
    { show: true, node: node("2") },
    { show: true, node: node("3") },
  ],
};
