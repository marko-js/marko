export const _template_ = `${_child_template}`;
export const _walks_ = /* beginChild, _child_walks, endChild */`/${_child_walks}&`;
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
}
import { createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/return-tag-no-var/template.marko");