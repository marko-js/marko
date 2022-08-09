import { createRenderer as _createRenderer, conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _elseBody = _createRenderer("C", "");

const _elseIfBody = _createRenderer("B", "");

const _ifBody3 = _createRenderer("A", "");

const _ifBody2 = _createRenderer("World", "");

const _ifBody = _createRenderer("Hello", "");

const _if3 = _conditional(12, 2, (_scope, x = _scope[20], y = _scope[21]) => x ? _ifBody3 : y ? _elseIfBody : _elseBody);

const _if2 = _conditional(6, 2, (_scope, a = _scope[18], b = _scope[19]) => (a, b) ? _ifBody2 : null);

const _if = _conditional(0, 2, (_scope, a = _scope[18], b = _scope[19]) => a + b ? _ifBody : null);

const _y = _source(21, [_if3]);

const _x = _source(20, [_if3]);

const _b = _source(19, [_if, _if2]);

const _a = _source(18, [_if, _if2]);

export const attrs = _destructureSources([_a, _b, _x, _y], (_scope, {
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
export const walks =
/* replace, skip(5), over(1), replace, skip(5), over(1), next(1), replace, skip(5), out(1) */
"%-b%-bD%-l";
export const setup = function () {};
export default _createRenderFn(template, walks, setup, attrs);