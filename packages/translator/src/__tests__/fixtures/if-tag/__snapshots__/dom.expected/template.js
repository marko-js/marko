import { createRenderer as _createRenderer, conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _elseBody = /* @__PURE__ */_createRenderer("C", "");
const _elseIfBody = /* @__PURE__ */_createRenderer("B", "");
const _ifBody3 = /* @__PURE__ */_createRenderer("A", "");
const _ifBody2 = /* @__PURE__ */_createRenderer("World", "");
const _ifBody = /* @__PURE__ */_createRenderer("Hello", "");
const _if3 = /* @__PURE__ */_conditional("#text/2", 2, (_scope, x = _scope["x"], y = _scope["y"]) => x ? _ifBody3 : y ? _elseIfBody : _elseBody);
const _if2 = /* @__PURE__ */_conditional("#text/1", 2, (_scope, a = _scope["a"], b = _scope["b"]) => (a, b) ? _ifBody2 : null);
const _if = /* @__PURE__ */_conditional("#text/0", 2, (_scope, a = _scope["a"], b = _scope["b"]) => a + b ? _ifBody : null);
const _y = /* @__PURE__ */_source("y", [_if3]);
const _x = /* @__PURE__ */_source("x", [_if3]);
const _b = /* @__PURE__ */_source("b", [_if, _if2]);
const _a = /* @__PURE__ */_source("a", [_if, _if2]);
export const attrs = /* @__PURE__ */_destructureSources([_a, _b, _x, _y], (_scope, {
  a,
  b,
  x,
  y
}) => {
  _setSource(_scope, _a, a);
  _setSource(_scope, _b, b);
  _setSource(_scope, _x, x);
  _setSource(_scope, _y, y);
});
export { _a as _apply_a, _b as _apply_b, _x as _apply_x, _y as _apply_y };
export const template = "<!><!><div><!></div>";
export const walks = /* replace, over(1), replace, over(1), next(1), replace, out(1) */"%b%bD%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);