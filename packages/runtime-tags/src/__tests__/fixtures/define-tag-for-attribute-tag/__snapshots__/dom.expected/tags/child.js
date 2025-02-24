export const _template_ = "<div><!></div>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const _input_thing_content_ = /* @__PURE__ */_$.value("input_thing_content", (_scope, input_thing_content) => _dynamicTag(_scope, input_thing_content), () => _dynamicTag);
export const _input_thing_selected_ = /* @__PURE__ */_$.value("input_thing_selected", (_scope, input_thing_selected) => _$.classAttr(_scope["#div/0"], {
  "selected": input_thing_selected
}));
export const _input_thing_ = /* @__PURE__ */_$.value("input_thing", (_scope, input_thing) => {
  _input_thing_selected_(_scope, input_thing?.selected);
  _input_thing_content_(_scope, input_thing?.content);
}, () => _input_thing_content_);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_thing_(_scope, input.thing), () => _input_thing_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, () => _params__);