import { data as _data, source as _source, createRenderer as _createRenderer, setSource as _setSource, loop as _loop, derivation as _derivation, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _val$forBody2 = _source(1, [], (_scope, val) => _data(_scope[0], val));

const _forBody2 = _createRenderer("<div> </div>",
/* next(1), get */
"D ");

const _val$forBody = _source(1, [], (_scope, val) => _data(_scope[0], val));

const _forBody = _createRenderer("<div> </div>",
/* next(1), get */
"D ");

const _for2 = _loop(7, 1, _forBody2, [_val$forBody2], (_scope, [val]) => _setSource(_scope, _val$forBody2, val), (_scope, arrA = _scope[14]) => [arrA, null]);

const _for = _loop(0, 1, _forBody, [_val$forBody], (_scope, [val]) => _setSource(_scope, _val$forBody, val), (_scope, arrA = _scope[14]) => [arrA, null]);

const _arrA = _derivation(14, 1, [_for, _for2], _scope => [1, 2, 3]);

const _setup = _scope => {
  _notifySignal(_scope, _arrA);
};

export const template = "<div></div><div><!><div></div></div>";
export const walks =
/* get, skip(6), over(1), next(1), replace, skip(6), out(1) */
" .bD%.l";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);