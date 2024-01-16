import { classAttr as _classAttr, write as _write, createRenderer as _createRenderer, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, intersections as _intersections, value as _value, values as _values, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
import { setup as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
const _testBody = /* @__PURE__ */_createRenderer("", "");
const _inputTestBody = /* @__PURE__ */_createRenderer("", "");
const _inputTest_input = _dynamicTagAttrs("#text/3", _inputTestBody);
const _expr_dynamicTagName_c_d = /* @__PURE__ */_intersection(3, _scope => {
  const {
    "#text/3": dynamicTagName,
    c,
    d
  } = _scope;
  _inputTest_input(_scope, () => ({
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
  }));
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
const _dynamicTagName = /* @__PURE__ */_conditional("#text/3", null, _expr_dynamicTagName_c_d);
const _d = /* @__PURE__ */_value("d", null, _intersections([_expr_c_d, _expr_dynamicTagName_c_d]));
const _c = /* @__PURE__ */_value("c", null, _intersections([_expr_c_d, _expr_dynamicTagName_c_d]));
const _destructure2 = (_scope, _destructure, _clean) => {
  let c, d;
  if (!_clean) ({
    c,
    d
  } = _destructure);
  _c(_scope, c, _clean);
  _d(_scope, d, _clean);
};
const _destructure3 = (_scope, _destructure, _clean) => {
  let c, d;
  if (!_clean) ({
    c,
    d
  } = _destructure);
  _c(_scope, c, _clean);
  _d(_scope, d, _clean);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _destructure2(_scope, input);
  _dynamicTagName(_scope, input.test || _inputTestBody);
}, void 0, _values([_destructure3, _dynamicTagName]));
const _setup = _scope => {
  _customTag(_scope["#childScope/1"]);
  _customTag(_scope["#childScope/2"]);
};
export const attrs = _input;
export { _input };
export const template = `<div></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}<!>`;
export const walks = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&%b`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator-tags/src/__tests__/fixtures/attr-class/template.marko");