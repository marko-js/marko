import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {
      children: [
        {
          id: 1,
          text: "a",
        },
        {
          id: 2,
          text: "b",
        },
        {
          id: 3,
          text: "c",
        },
      ],
    },
    {
      children: [
        {
          id: 2,
          text: "b",
        },
        {
          id: 3,
          text: "c",
        },
        {
          id: 1,
          text: "a",
        },
      ],
    },
    {
      children: [],
    },
  ],
};
