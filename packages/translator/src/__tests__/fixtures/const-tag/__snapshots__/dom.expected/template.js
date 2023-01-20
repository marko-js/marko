import { data as _data, derivation as _derivation, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _y = /* @__PURE__ */_derivation("y", 1, [], _scope => 1, (_scope, y) => _data(_scope["#text/1"], y));
const _x = /* @__PURE__ */_derivation("x", 1, [], _scope => 1, (_scope, x) => _data(_scope["#text/0"], x));
const _setup = _scope => {
  _notifySignal(_scope, _x);
  _notifySignal(_scope, _y);
};
export const template = "<div> </div><!>";
export const walks = /* next(1), get, out(1), replace, over(1) */"D l%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);