export const _template_ = `<div></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}<!><!>`;
export const _walks_ = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&%bD`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _className_ as _customTag_input_class, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./tags/custom-tag.marko";
const _test_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello");
const _expr_input_test_c_d = /* @__PURE__ */_$.intersection(10, _scope => {
  const {
    input_test,
    c,
    d
  } = _scope;
  _dynamicTag(_scope, input_test, () => ({
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
}, 2);
const _expr_c_d = /* @__PURE__ */_$.intersection(9, _scope => {
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
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/3");
export const _d_ = /* @__PURE__ */_$.value("d", _scope => {
  _expr_c_d(_scope);
  _expr_input_test_c_d(_scope);
});
export const _c_ = /* @__PURE__ */_$.value("c", _scope => {
  _expr_c_d(_scope);
  _expr_input_test_c_d(_scope);
});
export const _input_test_ = /* @__PURE__ */_$.value("input_test", _scope => _expr_input_test_c_d(_scope));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_test_(_scope, input.test);
  _c_(_scope, input.c);
  _d_(_scope, input.d);
});
export function _setup_(_scope) {
  _customTag(_scope["#childScope/1"]);
  _customTag(_scope["#childScope/2"]);
  _customTag_input_class(_scope["#childScope/2"], ["a", false, "b"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);