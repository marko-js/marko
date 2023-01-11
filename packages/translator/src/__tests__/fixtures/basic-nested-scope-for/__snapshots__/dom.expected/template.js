import { setSource as _setSource, on as _on, attr as _attr, queueSource as _queueSource, data as _data, subscriber as _subscriber, inLoopScope as _inLoopScope, closure as _closure, source as _source, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderer as _createRenderer, loop as _loop, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_selected_num$forBody = /* @__PURE__ */_subscriber([], 2, (_scope, selected = _scope._[7], num = _scope[2]) => {
  _attr(_scope[0], "data-selected", selected === num);
  _attr(_scope[0], "data-multiple", num % selected === 0);
});
const _selected$forBody = /* @__PURE__ */_closure(1, 7, [_expr_selected_num$forBody]);
const _onClick = function (_scope) {
  const num = _scope[2];
  _queueSource(_scope._, _selected, num);
};
const _hydrate_num$forBody = _register("packages/translator/src/__tests__/fixtures/basic-nested-scope-for/template.marko_1_num", _scope => {
  const num = _scope[2];
  _on(_scope[0], "click", /* @__PURE__ */_bind(_scope, _onClick));
});
const _num$forBody = /* @__PURE__ */_source(2, [_expr_selected_num$forBody], (_scope, num) => {
  _data(_scope[1], num);
  _queueHydrate(_scope, _hydrate_num$forBody);
});
const _forBody = /* @__PURE__ */_createRenderer("<button> </button>", /* get, next(1), get */" D ", null, [_selected$forBody]);
const _for = /* @__PURE__ */_loop(0, 1, _forBody, [_num$forBody], (_scope, [num]) => _setSource(_scope, _num$forBody, num), _scope => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], null]);
const _selected = /* @__PURE__ */_source(7, [/* @__PURE__ */_inLoopScope(_selected$forBody, 0)]);
const _setup = _scope => {
  _setSource(_scope, _selected, 0);
  _notifySignal(_scope, _for);
};
export const template = "<!>";
export const walks = /* replace, skip(6), over(1) */"%.b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);