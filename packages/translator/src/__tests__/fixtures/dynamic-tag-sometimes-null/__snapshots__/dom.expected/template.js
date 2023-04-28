import { dynamicTagAttrs as _dynamicTagAttrs, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _xBody = /* @__PURE__ */_createRenderer("Body Content", "");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", (_scope, _dirty) => {
  let _x_input;
  if (_dirty) {
    _x_input = () => ({});
  }
  _dynamicTagAttrs(_scope, "#text/0", _x_input, _xBody, _dirty);
});
const _x_effect = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    x
  } = _scope;
  _queueSource(_scope, _x, x ? null : "div");
}));
const _x = /* @__PURE__ */_value("x", (_scope, x, _dirty) => {
  let _dynamicTagName_value;
  if (_dirty) {
    _queueEffect(_scope, _x_effect);
    _dynamicTagName_value = x || _xBody;
  }
  _dynamicTagName(_scope, _dynamicTagName_value, _dirty);
});
const _setup = _scope => {
  _x(_scope, null);
};
export const template = "<!><button></button>";
export const walks = /* replace, over(1), get, over(1) */"%b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko");