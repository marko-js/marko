import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
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
          id: 1,
          text: "a",
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
          id: 4,
          text: "d",
        },
        {
          id: 3,
          text: "c",
        },
      ],
    },
  ],
};
