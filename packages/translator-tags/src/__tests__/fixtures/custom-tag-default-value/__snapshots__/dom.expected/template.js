export const _template_ = `${_child_template}${_child_template}`;
export const _walks_ = /* beginChild, _child_walks, endChild, beginChild, _child_walks, endChild */`/${_child_walks}&/${_child_walks}&`;
import { _setup_ as _child, _input_ as _child_input, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
import { inChild as _inChild, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _x = /* @__PURE__ */_state("x", (_scope, x) => _child_input(_scope["#childScope/1"], {
  value: x
}), () => _inChild("#childScope/1", _child_input));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _child(_scope["#childScope/1"]);
  _x(_scope, "y");
  _child_input(_scope["#childScope/0"], {
    value: 3
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-default-value/template.marko");