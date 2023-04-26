import { styleAttr as _styleAttr, write as _write, dynamicTagAttrs as _dynamicTagAttrs, createRenderer as _createRenderer, conditional as _conditional, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
const _testBody = /* @__PURE__ */_createRenderer("", "");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/4", (_scope, _dirty) => {
  let _dynamicBody_attrs;
  if (_dirty) {
    _dynamicBody_attrs = () => ({
      style: {
        color: "green"
      },
      test: {
        style: {
          color: "green"
        },
        renderBody() {
          _write("Hello");
        }
      }
    });
  }
  _dynamicTagAttrs(_scope, "#text/4", _dynamicBody_attrs, _testBody, _dirty);
});
const _test = /* @__PURE__ */_value("test", (_scope, test, _dirty) => {
  let _dynamicTagName_value;
  if (_dirty) {
    _dynamicTagName_value = test || _testBody;
  }
  _dynamicTagName(_scope, _dynamicTagName_value, _dirty);
});
const _color = /* @__PURE__ */_value("color", (_scope, color) => _styleAttr(_scope["#div/0"], {
  color: color
}));
const _setup = _scope => {
  _customTag(_scope["#childScope/1"]);
  _customTag(_scope["#childScope/2"]);
  _customTag(_scope["#childScope/3"]);
};
export const attrs = (_scope, _destructure, _dirty = true) => {
  let color, test;
  if (_dirty) ({
    color,
    test
  } = _destructure);
  _color(_scope, color, _dirty);
  _test(_scope, test, _dirty);
};
export { _color, _test };
export const template = `<div></div><div style=width:100px></div><div style="color: green"></div>${_customTag_template}${_customTag_template}${_customTag_template}<!>`;
export const walks = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&/${_customTag_walks}&%b`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/attr-style/template.marko");