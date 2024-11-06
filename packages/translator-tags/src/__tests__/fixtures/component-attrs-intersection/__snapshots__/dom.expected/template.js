export const _template_ = `${_displayIntersection_template}<button></button>`;
export const _walks_ = /* beginChild, _displayIntersection_walks, endChild, get, over(1) */`/${_displayIntersection_walks}& b`;
import { _setup_ as _displayIntersection, _value_ as _displayIntersection_input_value, _template_ as _displayIntersection_template, _walks_ as _displayIntersection_walks } from "./components/display-intersection.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count", _scope => _$.on(_scope["#button/1"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _count_effect(_scope);
  _displayIntersection_input_value(_scope["#childScope/0"], count);
}, () => _$.inChild("#childScope/0", _displayIntersection_input_value));
export function _setup_(_scope) {
  _displayIntersection(_scope["#childScope/0"]);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko");