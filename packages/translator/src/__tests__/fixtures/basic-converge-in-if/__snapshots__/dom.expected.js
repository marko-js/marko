import { setSource as _setSource, data as _data, subscriber as _subscriber, inConditionalScope as _inConditionalScope, closure as _closure, createRenderer as _createRenderer, conditional as _conditional, source as _source, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _expr_a_b$ifBody = _subscriber([], 2, (_scope, a = _scope._[6], b = _scope._[7]) => _data(_scope[0], a + b));

const _b$ifBody = _closure(1, 7, [_expr_a_b$ifBody]);

const _a$ifBody = _closure(1, 6, [_expr_a_b$ifBody]);

const _ifBody = _createRenderer(" ",
/* get */
" ", null, [_a$ifBody, _b$ifBody]);

const _if = _conditional(0, 1, _scope => true ? _ifBody : null);

const _b = _source(7, [_inConditionalScope(_b$ifBody, 0)]);

const _a = _source(6, [_inConditionalScope(_a$ifBody, 0)]);

const _setup = _scope => {
  _setSource(_scope, _a, 0);

  _setSource(_scope, _b, 0);

  _notifySignal(_scope, _if);
};

export const template = "<!>";
export const walks =
/* replace, skip(5), over(1) */
"%-b";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);