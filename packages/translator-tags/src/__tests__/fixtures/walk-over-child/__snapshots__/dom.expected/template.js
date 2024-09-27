export const _template_ = `<section>${_child_template}</section><div> </div>`;
export const _walks_ = /* next(1), beginChild, _child_walks, endChild, out(1), next(1), get, out(1) */`D/${_child_walks}&lD l`;
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _count = /* @__PURE__ */_value("count", (_scope, count) => _data(_scope["#text/1"], count));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _count(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/walk-over-child/template.marko");