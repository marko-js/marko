import { setup as _displayIntersection, args as _displayIntersection_args, template as _displayIntersection_template, walks as _displayIntersection_walks } from "./components/display-intersection.marko";
import { inChild as _inChild, on as _on, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _count_effect = _register("packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    count
  } = _scope;
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _queueEffect(_scope, _count_effect);
  _displayIntersection_args(_scope["#childScope/0"], [{
    value: count
  }]);
}, void 0, _inChild("#childScope/0", _displayIntersection_args));
const _setup = _scope => {
  _displayIntersection(_scope["#childScope/0"]);
  _count(_scope, 0);
};
export const template = `${_displayIntersection_template}<button></button>`;
export const walks = /* beginChild, _displayIntersection_walks, endChild, get, over(1) */`/${_displayIntersection_walks}& b`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko");