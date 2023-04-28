import { classAttr as _classAttr, write as _write, dynamicTagAttrs as _dynamicTagAttrs, createRenderer as _createRenderer, intersection as _intersection, conditional as _conditional, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
const _inputTestBody = /* @__PURE__ */_createRenderer("", "");
const _destructure2 = (_scope, _destructure, _dirty = true) => {
  let c, d;
  if (_dirty) ({
    c,
    d
  } = _destructure);
  _c(_scope, c, _dirty);
  _d(_scope, d, _dirty);
};
const _expr_dynamicTagName_c_d = /* @__PURE__ */_intersection(3, (_scope, _dirty) => {
  let _inputTest_input;
  if (_dirty) {
    const {
      "#text/3": dynamicTagName,
      c,
      d
    } = _scope;
    _inputTest_input = () => ({
      class: ["a", {
        b: c,
        d
      }],
      test: {
        class: ["a", {
          b: c,
          d
        }],
        renderBody() {
          _write("Hello");
        }
      }
    });
  }
  _dynamicTagAttrs(_scope, "#text/3", _inputTest_input, _inputTestBody, _dirty);
});
const _expr_c_d = /* @__PURE__ */_intersection(2, _scope => {
  const {
    c,
    d
  } = _scope;
  _classAttr(_scope["#div/0"], ["a", {
    b: c,
    d
  }]);
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/3", (_scope, _dirty) => _expr_dynamicTagName_c_d(_scope, _dirty));
const _d = /* @__PURE__ */_value("d", (_scope, d, _dirty) => {
  _expr_c_d(_scope, _dirty);
  _expr_dynamicTagName_c_d(_scope, _dirty);
});
const _c = /* @__PURE__ */_value("c", (_scope, c, _dirty) => {
  _expr_c_d(_scope, _dirty);
  _expr_dynamicTagName_c_d(_scope, _dirty);
});
const _input = /* @__PURE__ */_value("input", (_scope, input, _dirty) => {
  let _destructure2_value, _dynamicTagName_value;
  if (_dirty) {
    _destructure2_value = input;
    _dynamicTagName_value = input.test || _inputTestBody;
  }
  _destructure2(_scope, _destructure2_value, _dirty);
  _dynamicTagName(_scope, _dynamicTagName_value, _dirty);
});
const _setup = _scope => {
  _customTag(_scope["#childScope/1"]);
  _customTag(_scope["#childScope/2"]);
};
export const attrs = _input;
export { _input };
export const template = `<div></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}<!>`;
export const walks = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&%b`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/attr-class/template.marko");