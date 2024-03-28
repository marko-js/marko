import { styleAttr as _styleAttr, write as _write, createRenderer as _createRenderer, register as _register, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { setup as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
const _testBody2 = _register("packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko_2_renderer", /* @__PURE__ */_createRenderer("", ""));
const _testBody = _register("packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko_1_renderer", /* @__PURE__ */_createRenderer("", ""));
const _test_input = _dynamicTagAttrs("#text/4", _testBody);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/4", _scope => _test_input(_scope, () => ({
  style: {
    color: "green"
  },
  test: {
    style: {
      color: "green"
    },
    renderBody: () => {
      _write("Hello");
    }
  }
})), void 0, _test_input);
const _test = /* @__PURE__ */_value("test", (_scope, test) => _dynamicTagName(_scope, test || _testBody), void 0, _dynamicTagName);
const _color = /* @__PURE__ */_value("color", (_scope, color) => _styleAttr(_scope["#div/0"], {
  color: color
}));
const _destructure2 = (_scope, _destructure, _clean) => {
  let color, test;
  if (!_clean) ({
    color,
    test
  } = _destructure);
  _color(_scope, color, _clean);
  _test(_scope, test, _clean);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input), void 0, _destructure2);
const _setup = _scope => {
  _customTag(_scope["#childScope/1"]);
  _customTag(_scope["#childScope/2"]);
  _customTag(_scope["#childScope/3"]);
};
export const args = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const template = `<div></div><div style=width:100px></div><div style="color: green"></div>${_customTag_template}${_customTag_template}${_customTag_template}<!><!>`;
export const walks = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&/${_customTag_walks}&%bD`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/attr-style/template.marko");