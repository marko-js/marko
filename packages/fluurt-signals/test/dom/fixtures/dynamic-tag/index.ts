import { attr, dynamicTag, register } from "../../../../dom/index";

import { beginEl, endEl, text, withTemplate, createTemplate, dynamicAttr, nextElementRef } from "../../../../dom/dom";

export const inputs = [
  {
    tag: "span"
  },
  {
    tag: withTemplate(() => {}, createTemplate("Hello"))
  },
  {
    tag: "span"
  },
  {
    tag: "a"
  },
  {
    tag: withTemplate(Object.assign(
      (input: { a: 1; renderBody: () => void }) => {
        nextElementRef();
        dynamicAttr("a", input.a);
        input.renderBody();
      },
      { input: ["a", "renderBody"] }
    ), createTemplate(`<div #><!#F></div>`))
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    dynamicTag(input.tag, { a: 1 }, withTemplate(() => {}, renderBody_template));
  }
);

const renderBody_template = createTemplate("BODY");

renderer.input = ["tag"];

export const html = `<!#F>`;
export default renderer;
