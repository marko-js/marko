import { setSource as _setSource, inChild as _inChild, on as _on, queueSource as _queueSource, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _displayIntersection, attrs as _displayIntersection_attrs, template as _displayIntersection_template, walks as _displayIntersection_walks } from "./components/display-intersection.marko";
const _hydrate_count = _register("packages/translator/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count", _scope => _on(_scope["#button/1"], "click", function () {
  const count = _scope["count"];
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_source("count", [_inChild(_displayIntersection_attrs, "#childScope/0")], (_scope, count) => {
  _setSource(_scope["#childScope/0"], _displayIntersection_attrs, {
    value: count
  });
  _queueHydrate(_scope, _hydrate_count);
});
const _setup = _scope => {
  _setSource(_scope, _count, 0);
  _displayIntersection(_scope["#childScope/0"]);
};
export const template = `${_displayIntersection_template}<button></button>`;
export const walks = /* beginChild, _displayIntersection_walks, endChild, get, over(1) */`/${_displayIntersection_walks}& b`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/component-attrs-intersection/template.marko");