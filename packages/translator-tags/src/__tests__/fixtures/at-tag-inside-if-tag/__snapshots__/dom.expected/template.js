export const _template_ = `<!>${_customTag_template}`;
export const _walks_ = /* beginChild, _customTag_walks, endChild */`D/${_customTag_walks}&`;
import { _setup_ as _customTag, _thing_ as _customTag_input_thing, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./components/custom-tag/index.marko";
import { attrTag as _attrTag, inChild as _inChild, createRendererWithOwner as _createRendererWithOwner, register as _register, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _thingBody2 = _register("packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_2_renderer", /* @__PURE__ */_createRendererWithOwner("Goodbye", ""));
const _thingBody = _register("packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("Hello", ""));
export const _x_ = /* @__PURE__ */_value("x", (_scope, x) => {
  let _thing;
  if (x) {
    _thing = _attrTag({
      x: 1,
      renderBody: _thingBody(_scope)
    });
  } else {
    _thing = _attrTag({
      x: 2,
      renderBody: _thingBody2(_scope)
    });
  }
  _customTag_input_thing(_scope["#childScope/0"], _thing);
}, () => _inChild("#childScope/0", _customTag_input_thing));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _x_(_scope, input.x), () => _x_);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _customTag(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko");