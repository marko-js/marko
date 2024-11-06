export const _template_ = `<div></div><div style=width:100px></div><div style="color: green"></div>${_customTag_template}${_customTag_template}${_customTag_template}<!><!>`;
export const _walks_ = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&/${_customTag_walks}&%bD`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _style_ as _customTag_input_style, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./components/custom-tag.marko";
const _testBody = _$.register("packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("Hello", ""));
const _test_input = _$.dynamicTagAttrs("#text/4");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/4", _scope => _test_input(_scope, () => ({
  style: {
    color: "green"
  },
  test: _$.attrTag({
    style: {
      color: "green"
    },
    renderBody: _testBody(_scope)
  })
})), () => _test_input);
export const _test_ = /* @__PURE__ */_$.value("test", (_scope, test) => _dynamicTagName(_scope, test), () => _dynamicTagName);
export const _color_ = /* @__PURE__ */_$.value("color", (_scope, color) => {
  _$.styleAttr(_scope["#div/0"], {
    color: color
  });
  _customTag_input_style(_scope["#childScope/1"], {
    color: color
  });
}, () => _$.inChild("#childScope/1", _customTag_input_style));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _color_(_scope, input.color);
  _test_(_scope, input.test);
}, () => _$.intersections([_color_, _test_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _customTag(_scope["#childScope/1"]);
  _customTag(_scope["#childScope/2"]);
  _customTag(_scope["#childScope/3"]);
  _customTag_input_style(_scope["#childScope/2"], {
    width: 100
  });
  _customTag_input_style(_scope["#childScope/3"], "color: green");
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);