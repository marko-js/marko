import type { TestConfig } from "../../main.test";

// A content body holding an await constructs from its record (the await
// body ships alongside) and pairs on later frames.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, value: "x" },
    { show: true, value: "x" },
    { show: true, value: "y" },
    { show: false, value: "y" },
    { show: true, value: "z" },
  ],
};
