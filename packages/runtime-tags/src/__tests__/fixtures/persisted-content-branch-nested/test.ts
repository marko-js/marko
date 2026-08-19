import type { TestConfig } from "../../main.test";

// A content body inside nested branches constructs with them and stays
// current while paired.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { a: false, b: false, label: "l", text: "x" },
    { a: true, b: false, label: "l", text: "x" },
    { a: true, b: true, label: "l", text: "x" },
    { a: true, b: true, label: "m", text: "y" },
    { a: false, b: true, label: "m", text: "y" },
    { a: true, b: true, label: "n", text: "z" },
  ],
};
