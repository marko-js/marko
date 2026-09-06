import type { TestConfig } from "../../main.test";

// A constant spread fed to a child inside a constructed branch seeds the
// fresh scope's setup (attrs and the following static attr).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, title: "a" },
    { show: true, title: "b" },
    { show: true, title: "c" },
  ],
};
