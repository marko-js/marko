import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(sel)!.click();
};

// A state + server-value intersection inside body content: state edits
// re-render with the filled value; fills re-render with the live state.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { a: "x" },
    click(".toggle"),
    click(".bump"),
    { a: "y" },
    click(".bump"),
    click(".toggle"),
    { a: "z" },
    click(".toggle"),
  ],
};
