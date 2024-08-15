import { register as _register, data as _data, createRenderer as _createRenderer, value as _value, loopOf as _loopOf, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _by = _register("packages/translator-tags/src/__tests__/fixtures/move-and-clear-top-level/template.marko_0/by", _scope => function (c) {
  return c.id;
});
const _child$forBody = /* @__PURE__ */_value("child", (_scope, child) => _data(_scope["#text/0"], child.text));
const _params_2$forBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _child$forBody(_scope, _params_2[0]));
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/move-and-clear-top-level/template.marko_1_renderer", /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, void 0, void 0, _params_2$forBody));
const _for = /* @__PURE__ */_loopOf("#text/0", _forBody);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _for(_scope, [input.children, _by(_scope)]));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/move-and-clear-top-level/template.marko");