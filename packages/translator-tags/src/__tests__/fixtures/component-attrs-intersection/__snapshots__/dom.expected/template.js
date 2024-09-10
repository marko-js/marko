export const _template_ = `${_displayIntersection_template}<button></button>`;
export const _walks_ = /* beginChild, _displayIntersection_walks, endChild, get, over(1) */`/${_displayIntersection_walks}& b`;
import { _setup_ as _displayIntersection, _value_ as _displayIntersection__value_, _template_ as _displayIntersection_template, _walks_ as _displayIntersection_walks } from "./components/display-intersection.marko";
import { inChild as _inChild, on as _on, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _queueSource(_scope, _count, count + 1);
  };
};
const _count_effect = _register("packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _queueEffect(_scope, _count_effect);
  _displayIntersection__value_(_scope["#childScope/0"], count);
}, _inChild("#childScope/0", _displayIntersection__value_));
export function _setup_(_scope) {
  _displayIntersection(_scope["#childScope/0"]);
  _count(_scope, 0);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko");