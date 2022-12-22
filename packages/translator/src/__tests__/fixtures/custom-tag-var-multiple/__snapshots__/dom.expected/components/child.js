import { setSource as _setSource, tagVarSignal as _tagVarSignal, subscriber as _subscriber, source as _source, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_x_y = /* @__PURE__ */_subscriber([_tagVarSignal], 2, (_scope, x = _scope[0], y = _scope[1]) => _setSource(_scope, _tagVarSignal, x + y));
const _y = /* @__PURE__ */_source(1, [_expr_x_y]);
const _x = /* @__PURE__ */_source(0, [_expr_x_y]);
const _setup = _scope => {
  _setSource(_scope, _x, 1);
  _setSource(_scope, _y, 2);
};
export const template = "<span>child</span>";
export const walks = /* over(1) */"b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);