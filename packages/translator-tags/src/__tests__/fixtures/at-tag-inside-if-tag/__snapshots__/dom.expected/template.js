export const _template_ = `<!>${_customTag_template}`;
export const _walks_ = /* beginChild, _customTag_walks, endChild */`D/${_customTag_walks}&`;
import { _setup_ as _customTag, _pattern__ as _customTag_input_thing, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./components/custom-tag/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _thingBody2 = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRendererWithOwner("Goodbye", ""));
const _thingBody = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("Hello", ""));
export const _x_ = /* @__PURE__ */_$.value("x", (_scope, x) => {
  let _thing;
  if (x) {
    _thing = _$.attrTag({
      x: 1,
      renderBody: _thingBody(_scope)
    });
  } else {
    _thing = _$.attrTag({
      x: 2,
      renderBody: _thingBody2(_scope)
    });
  }
  _customTag_input_thing(_scope["#childScope/0"], _thing);
}, () => _$.inChild("#childScope/0", _customTag_input_thing));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _x_(_scope, input.x), () => _x_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _customTag(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);