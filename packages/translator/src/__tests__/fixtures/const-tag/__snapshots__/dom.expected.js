import { data as _data, derivation as _derivation, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _y = _derivation(3, 1, [], _scope => 1, (_scope, y) => _data(_scope[1], y));

const _x = _derivation(2, 1, [], _scope => 1, (_scope, x) => _data(_scope[0], x));

const _setup = _scope => {
  _notifySignal(_scope, _x);

  _notifySignal(_scope, _y);
};

export const template = "<div> </div><!>";
export const walks =
/* next(1), get, out(1), replace, over(1) */
"D l%b";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);