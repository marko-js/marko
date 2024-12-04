export const _template_ = "<div><!></div>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _inputThingRenderBody_input = _$.dynamicTagAttrs("#text/1");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/1", _scope => _inputThingRenderBody_input(_scope, () => ({})), () => _inputThingRenderBody_input);
export const _input_thing_renderBody_ = /* @__PURE__ */_$.value("input_thing_renderBody", (_scope, input_thing_renderBody) => _dynamicTagName(_scope, input_thing_renderBody), () => _dynamicTagName);
export const _input_thing_selected_ = /* @__PURE__ */_$.value("input_thing_selected", (_scope, input_thing_selected) => _$.classAttr(_scope["#div/0"], {
  "selected": input_thing_selected
}));
export const _input_thing_ = /* @__PURE__ */_$.value("input_thing", (_scope, input_thing) => {
  _input_thing_selected_(_scope, input_thing?.selected);
  _input_thing_renderBody_(_scope, input_thing?.renderBody);
}, () => _input_thing_renderBody_);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_thing_(_scope, input.thing), () => _input_thing_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/components/child.marko", _template_, _walks_, _setup_, void 0, () => _params__);