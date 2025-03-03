export const _template_ = `<div></div><div style=width:100px></div><div style="color: green"></div>${_customTag_template}${_customTag_template}${_customTag_template}<!><!>`;
export const _walks_ = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&/${_customTag_walks}&%bD`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _style_ as _customTag_input_style, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./tags/custom-tag.marko";
const _test_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello");
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/4");
export const _test_ = /* @__PURE__ */_$.value("test", (_scope, test) => _dynamicTag(_scope, test, () => ({
  style: {
    color: "green"
  },
  test: _$.attrTag({
    style: {
      color: "green"
    },
    content: _test_content(_scope)
  })
})));
export const _color_ = /* @__PURE__ */_$.value("color", (_scope, color) => {
  _$.styleAttr(_scope["#div/0"], {
    color: color
  });
  _customTag_input_style(_scope["#childScope/1"], {
    color: color
  });
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _color_(_scope, input.color);
  _test_(_scope, input.test);
});
export function _setup_(_scope) {
  _customTag(_scope["#childScope/1"]);
  _customTag(_scope["#childScope/2"]);
  _customTag(_scope["#childScope/3"]);
  _customTag_input_style(_scope["#childScope/2"], {
    width: 100
  });
  _customTag_input_style(_scope["#childScope/3"], "color: green");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);