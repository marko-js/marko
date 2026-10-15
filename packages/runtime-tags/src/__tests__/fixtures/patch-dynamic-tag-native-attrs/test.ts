import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLElement>("article, aside")!.click();
};

// A native dynamic tag's input ships as it is: the client renders class and
// style objects, drops `null`/`false`, and binds its handler and controllable.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      tag: "section",
      cls: { SHOWN_on1: true, SECRET_off1: false },
      sty: { color: "red", "--SECRET_var1": false },
      title: "SHOWN_t1",
      x: null,
      hidden: false,
      field: "input",
      checked: true,
    },
    {
      tag: "article",
      cls: { SHOWN_on2: true, SECRET_off2: false },
      sty: { color: "blue", "--SECRET_var2": false },
      title: "SHOWN_t2",
      x: "SHOWN_x2",
      hidden: false,
      field: "input",
      checked: false,
    },
    click,
    {
      tag: "aside",
      cls: ["SHOWN_on3"],
      sty: "color:green",
      title: undefined,
      x: null,
      hidden: true,
      field: "input",
      checked: true,
    },
  ],
};
