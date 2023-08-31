import myStyles from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import { classAttr as _classAttr, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _setup = _scope => {
  _classAttr(_scope["#div/1"], myStyles.content);
};
export const template = "<div>Hello</div>";
export const walks = /* get, over(1) */" b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator/src/__tests__/fixtures/style-tag-modules-default/template.marko");