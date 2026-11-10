import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function each row chooses by its item, passed to a child calling it as a method of
// its input: the row's script re-runs as the child's input slot changes.
export const config: TestConfig = {
  patches: true,
  same_input_divergence:
    "A server-built object read whole re-runs its effect when written, as a document load would.",
  steps: [
    {
      title: "a",
      items: [
        { id: 1, upper: true },
        { id: 2, upper: false },
      ],
    },
    click,
    {
      title: "b",
      items: [
        { id: 1, upper: false },
        { id: 2, upper: false },
      ],
    },
    {
      title: "b",
      items: [
        { id: 2, upper: true },
        { id: 3, upper: false },
      ],
    },
  ],
};
