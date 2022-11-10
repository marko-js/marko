import { setSource as _setSource, data as _data, subscriber as _subscriber, inConditionalScope as _inConditionalScope, closure as _closure, createRenderer as _createRenderer, conditional as _conditional, source as _source, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_a_b$ifBody = /* @__PURE__ */_subscriber([], 2, (_scope, a = _scope._[6], b = _scope._[7]) => _data(_scope[0], a + b));
const _b$ifBody = /* @__PURE__ */_closure(1, 7, [_expr_a_b$ifBody]);
const _a$ifBody = /* @__PURE__ */_closure(1, 6, [_expr_a_b$ifBody]);
const _ifBody = /* @__PURE__ */_createRenderer(" ", /* get */" ", null, [_a$ifBody, _b$ifBody]);
const _if = /* @__PURE__ */_conditional(0, 1, _scope => true ? _ifBody : null);
const _b = /* @__PURE__ */_source(7, [/* @__PURE__ */_inConditionalScope(_b$ifBody, 0)]);
const _a = /* @__PURE__ */_source(6, [/* @__PURE__ */_inConditionalScope(_a$ifBody, 0)]);
const _setup = _scope => {
  _setSource(_scope, _a, 0);
  _setSource(_scope, _b, 0);
  _notifySignal(_scope, _if);
};
export const template = "<!>";
export const walks = /* replace, skip(5), over(1) */"%-b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);