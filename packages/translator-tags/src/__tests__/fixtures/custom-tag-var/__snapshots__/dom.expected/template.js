export const _template_ = `${_child_template}<div> </div>`;
export const _walks_ = /* beginChild, _child_walks, endChild, next(1), get, out(1) */`/${_child_walks}&D l`;
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
import { setTagVar as _setTagVar, data as _data2, value as _value, registerBoundSignal as _registerBoundSignal, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _data = _registerBoundSignal("packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data", /* @__PURE__ */_value("data", (_scope, data) => _data2(_scope["#text/1"], data)));
export function _setup_(_scope) {
  _setTagVar(_scope, "#childScope/0", _data);
  _child(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko");