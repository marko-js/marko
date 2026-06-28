import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { color: "red} :root { display: none } </style><script>alert(1)</script>" },
    { color: "red/* (" },
  ],
};
