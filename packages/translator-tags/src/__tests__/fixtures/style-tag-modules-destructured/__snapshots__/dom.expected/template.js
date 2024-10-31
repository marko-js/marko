export const _template_ = "<div>Hello</div>";
export const _walks_ = /* get, over(1) */" b";
import _style from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
const {
  content
} = _style;
import { classAttr as _classAttr, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export function _setup_(_scope) {
  _classAttr(_scope["#div/0"], content);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/style-tag-modules-destructured/template.marko");