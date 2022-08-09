import { data as _data, setSource as _setSource, source as _source, createRenderer as _createRenderer, loop as _loop, derivation as _derivation, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _i$forBody2 = _source(3, [], (_scope, i) => _data(_scope[0], i));

const _val$forBody2 = _source(2, [], (_scope, val) => _data(_scope[1], val));

const _forBody2 = _createRenderer("<div><!>: <!></div>",
/* next(1), replace, over(2), replace */
"D%c%");

const _i$forBody = _source(3, [], (_scope, i) => _data(_scope[0], i));

const _val$forBody = _source(2, [], (_scope, val) => _data(_scope[1], val));

const _forBody = _createRenderer("<div><!>: <!></div>",
/* next(1), replace, over(2), replace */
"D%c%");

const _for2 = _loop(7, 1, _forBody2, [_val$forBody2, _i$forBody2], (_scope, [val, i]) => {
  _setSource(_scope, _val$forBody2, val);

  _setSource(_scope, _i$forBody2, i);
}, (_scope, arrB = _scope[15]) => [arrB, null]);

const _for = _loop(0, 1, _forBody, [_val$forBody, _i$forBody], (_scope, [val, i]) => {
  _setSource(_scope, _val$forBody, val);

  _setSource(_scope, _i$forBody, i);
}, (_scope, arrA = _scope[14]) => [arrA, null]);

const _arrB = _source(15, [_for2]);

const _arrA = _derivation(14, 1, [_for], _scope => [1, 2, 3]);

const _setup = _scope => {
  _setSource(_scope, _arrB, [1, 2, 3]);

  _notifySignal(_scope, _arrA);
};

export const template = "<!><!>";
export const walks =
/* replace, skip(6), over(1), replace, skip(6), over(1) */
"%.b%.b";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);