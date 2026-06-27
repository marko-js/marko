import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {
      users: [
        { name: "Ada", role: "dev" },
        { name: "Lin", role: "pm" },
      ],
    },
    {
      users: [
        { name: "Ada", role: "dev" },
        { name: "Grace", role: "lead" },
      ],
    },
  ],
};
