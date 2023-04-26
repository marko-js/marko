import { setup as _displayIntersection, attrs as _displayIntersection_attrs, template as _displayIntersection_template, walks as _displayIntersection_walks } from "./components/display-intersection.marko";
import { on as _on, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _count_effect = _register("packages/translator/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count", _scope => _on(_scope["#button/1"], "click", function () {
  const count = _scope["count"];
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_value("count", (_scope, count, _dirty) => {
  let _displayIntersection_attrs_value;
  if (_dirty) {
    _queueEffect(_scope, _count_effect);
    _displayIntersection_attrs_value = {
      value: count
    };
  }
  _displayIntersection_attrs(_scope["#childScope/0"], _displayIntersection_attrs_value, _dirty);
});
const _setup = _scope => {
  _displayIntersection(_scope["#childScope/0"]);
  _count(_scope, 0);
};
export const template = `${_displayIntersection_template}<button></button>`;
export const walks = /* beginChild, _displayIntersection_walks, endChild, get, over(1) */`/${_displayIntersection_walks}& b`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/component-attrs-intersection/template.marko");