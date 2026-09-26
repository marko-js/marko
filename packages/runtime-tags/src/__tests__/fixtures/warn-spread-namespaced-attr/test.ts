import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  // Only a client render applies the spread, which warns.
  equivalent: false,
  steps: [
    {
      svg: { xmlns: "http://www.w3.org/2000/svg" },
      use: { "xlink:href": "#a" },
      div: { "xml:lang": "en" },
    },
    {
      svg: { xmlns: "http://www.w3.org/2000/svg" },
      use: { "xlink:href": "#b" },
      div: { "xml:lang": "fr" },
    },
  ],
};
