export const _template_ = `<div></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}<!><!>`;
export const _walks_ = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&%bD`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _className_ as _customTag_input_class, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./tags/custom-tag.marko";
const _test_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("Hello", ""));
const _inputTest_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/3");
const _expr_Text_c_d = /* @__PURE__ */_$.intersection(3, _scope => {
  const {
    c,
    d
  } = _scope;
  _inputTest_input(_scope, () => ({
    class: ["a", {
      b: c,
      d
    }],
    test: _$.attrTag({
      class: ["a", {
        b: c,
        d
      }],
      content: _test_content(_scope)
    })
  }));
}, () => _inputTest_input);
const _expr_c_d = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    c,
    d
  } = _scope;
  _$.classAttr(_scope["#div/0"], ["a", {
    b: c,
    d
  }]);
  _customTag_input_class(_scope["#childScope/1"], ["a", {
    b: c,
    d
  }]);
}, () => /* @__PURE__ */_$.inChild("#childScope/1", _customTag_input_class));
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/3", 0, () => _expr_Text_c_d);
export const _d_ = /* @__PURE__ */_$.value("d", 0, () => _$.intersections([_expr_c_d, _expr_Text_c_d]));
export const _c_ = /* @__PURE__ */_$.value("c", 0, () => _$.intersections([_expr_c_d, _expr_Text_c_d]));
export const _input_test_ = /* @__PURE__ */_$.value("input_test", (_scope, input_test) => _dynamicTagName(_scope, input_test), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_test_(_scope, input.test);
  _c_(_scope, input.c);
  _d_(_scope, input.d);
}, () => _$.intersections([_input_test_, _c_, _d_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _customTag(_scope["#childScope/1"]);
  _customTag(_scope["#childScope/2"]);
  _customTag_input_class(_scope["#childScope/2"], ["a", false, "b"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);