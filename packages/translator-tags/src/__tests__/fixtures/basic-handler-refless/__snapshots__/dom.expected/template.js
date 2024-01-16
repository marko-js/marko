import { on as _on, queueSource as _queueSource, data as _data2, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _data = /* @__PURE__ */_value("data", (_scope, data) => _data2(_scope["#text/1"], data));
const _setup_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-handler-refless/template.marko_0", _scope => _on(_scope["#button/0"], "click", function () {
  _queueSource(_scope, _data, 1);
}));
const _setup = _scope => {
  _queueEffect(_scope, _setup_effect);
  _data(_scope, 0);
};
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/basic-handler-refless/template.marko");