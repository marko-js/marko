import { setSource as _setSource, queueSource as _queueSource, on as _on, data as _data, inConditionalScope as _inConditionalScope, closure as _closure, createRenderer as _createRenderer, register as _register, queueHydrate as _queueHydrate, bind as _bind, conditional as _conditional, source as _source, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _clickCount$elseBody = /* @__PURE__ */_closure(1, 6, [], (_scope, clickCount) => _data(_scope[0], clickCount));
const _elseBody = /* @__PURE__ */_createRenderer("<span>The button was clicked <!> times.</span>", /* next(1), over(1), replace */"Db%", null, [_clickCount$elseBody]);
const _onClick = function (_scope) {
  const clickCount = _scope._[6];
  _queueSource(_scope._, _clickCount, clickCount + 1);
};
const _hydrate_clickCount$ifBody = _register("packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount", _scope => {
  const clickCount = _scope._[6];
  _on(_scope[0], "click", /* @__PURE__ */_bind(_scope, _onClick));
});
const _clickCount$ifBody = /* @__PURE__ */_closure(1, 6, [], (_scope, clickCount) => {
  _data(_scope[1], clickCount);
  _queueHydrate(_scope, _hydrate_clickCount$ifBody);
});
const _ifBody = /* @__PURE__ */_createRenderer("<button> </button>", /* get, next(1), get */" D ", null, [_clickCount$ifBody]);
const _if = /* @__PURE__ */_conditional(0, 1, (_scope, clickCount = _scope[6]) => clickCount < 3 ? _ifBody : _elseBody);
const _clickCount = /* @__PURE__ */_source(6, [_if, /* @__PURE__ */_inConditionalScope(_clickCount$elseBody, 0), /* @__PURE__ */_inConditionalScope(_clickCount$ifBody, 0)]);
const _setup = _scope => {
  _setSource(_scope, _clickCount, 0);
};
export const template = "<div><!></div>";
export const walks = /* next(1), replace, skip(5), out(1) */"D%-l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);