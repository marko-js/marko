import _style from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
const {
  content
} = _style;
import { classAttr as _classAttr, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _setup = _scope => {
  _classAttr(_scope["#div/1"], content);
};
export const template = "<div>Hello</div>";
export const walks = /* get, over(1) */" b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, void 0, void 0, "packages/translator/src/__tests__/fixtures/style-tag-modules-destructured/template.marko");