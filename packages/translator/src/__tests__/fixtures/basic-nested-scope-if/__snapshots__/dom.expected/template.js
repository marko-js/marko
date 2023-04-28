import { on as _on, queueSource as _queueSource, data as _data, closure as _closure, createRenderer as _createRenderer, register as _register, queueEffect as _queueEffect, conditional as _conditional, inConditionalScope as _inConditionalScope, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _clickCount$elseBody = /* @__PURE__ */_closure("clickCount", (_scope, clickCount) => _data(_scope["#text/0"], clickCount));
const _elseBody = _register("packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_2_renderer", /* @__PURE__ */_createRenderer("<span>The button was clicked <!> times.</span>", /* next(1), over(1), replace */"Db%", null, [_clickCount$elseBody]));
const _clickCount$ifBody_effect = _register("packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    _: {
      clickCount
    }
  } = _scope;
  _queueSource(_scope._, _clickCount, clickCount + 1);
}));
const _clickCount$ifBody = /* @__PURE__ */_closure("clickCount", (_scope, clickCount) => {
  _data(_scope["#text/1"], clickCount);
  _queueEffect(_scope, _clickCount$ifBody_effect);
});
const _ifBody = _register("packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<button> </button>", /* get, next(1), get */" D ", null, [_clickCount$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/0");
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount, _dirty) => {
  let _if_value;
  if (_dirty) {
    _if_value = clickCount < 3 ? _ifBody : _elseBody;
  }
  _if(_scope, _if_value, _dirty);
  _inConditionalScope(_scope, _dirty, _clickCount$ifBody, "#text/0");
  _inConditionalScope(_scope, _dirty, _clickCount$elseBody, "#text/0");
});
const _setup = _scope => {
  _clickCount(_scope, 0);
};
export const template = "<div><!></div>";
export const walks = /* next(1), replace, out(1) */"D%l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko");