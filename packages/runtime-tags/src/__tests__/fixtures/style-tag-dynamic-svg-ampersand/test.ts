import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ fill: "url(/i.svg?a=1&copy=2#p)", stroke: "red&#125" }],
  // The css var name embeds the template id, which differs by mode.
  skip_parity: true,
};
