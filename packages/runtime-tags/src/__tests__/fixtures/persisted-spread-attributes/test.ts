import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A request-derived spread patches as one attribute set: the client's
// `_attrs` re-applies it (adding, changing, and removing names), the
// static attrs merge in, and a constructed branch applies it too.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { attrs: { class: "x", title: "t1" }, label: "a", show: false },
    click,
    { attrs: { class: "y", "data-id": "7" }, label: "b", show: false },
    {
      attrs: { class: "y" },
      label: "b",
      show: true,
      img: { src: "/i.png", width: 10 },
    },
    { attrs: { class: "y" }, label: "b", show: true, img: { src: "/j.png" } },
    click,
  ],
};
