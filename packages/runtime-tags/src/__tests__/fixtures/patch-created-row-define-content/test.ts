import type { TestConfig } from "../../main.test";

function click(document: Document) {
  for (const b of document.querySelectorAll<HTMLButtonElement>("button"))
    b.click();
}

export const config: TestConfig = {
  patches: true,
  steps: [
    {
      rows: [
        { id: 1, card: true, label: "a", tags: ["x"] },
        { id: 2, card: true, label: "c", tags: ["y"] },
      ],
    },
    {
      rows: [
        { id: 2, card: false, label: "d", tags: ["z"] },
        { id: 3, card: false, label: "n", tags: ["q"] },
        { id: 1, card: true, label: "e", tags: ["x"] },
      ],
    },
    click,
    {
      rows: [
        { id: 3, card: false, label: "m", tags: ["q", "r"] },
        { id: 2, card: false, label: "f", tags: ["z", "w"] },
      ],
    },
    click,
  ],
};
