export const _template_ = `<!>${_bazComp_template}${_bazComp_template}<!>`;
export const _walks_ = /* beginChild, _bazComp_walks, endChild, beginChild, _bazComp_walks, endChild */`D/${_bazComp_walks}&/${_bazComp_walks}&D`;
import bazComp from "./components/baz.marko";
import { _setup_ as _bazComp, _template_ as _bazComp_template, _walks_ as _bazComp_walks } from "./components/baz.marko";
export function _setup_(_scope) {
  _bazComp(_scope["#childScope/0"]);
  _bazComp(_scope["#childScope/1"]);
}
import { createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/import-tag-shorthand/template.marko");