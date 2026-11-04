import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
const type = (document: Document) => {
  for (const input of document.querySelectorAll("input")) {
    input.value = "typed";
    input.dispatchEvent(new document.defaultView!.Event("input"));
  }
};

// A controlled input's handler shares its value's sources, here state beside
// params: the patch binds it ungated, as no caller group holds them.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { a: "a0", items: [{ id: 1, v: "x" }] },
    {
      a: "a1",
      items: [
        { id: 1, v: "y" },
        { id: 2, v: "z" },
      ],
    },
    click,
    type,
    { a: "a2", items: [{ id: 2, v: "z" }] },
  ],
};
