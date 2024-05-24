import { on as _on, queueSource as _queueSource, data as _data, createRenderer as _createRenderer, closure as _closure, register as _register, queueEffect as _queueEffect, conditional as _conditional, inConditionalScope as _inConditionalScope, intersections as _intersections, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _clickCount$elseBody = /* @__PURE__ */_closure("clickCount", (_scope, clickCount) => _data(_scope["#text/0"], clickCount));
const _elseBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_2_renderer", /* @__PURE__ */_createRenderer("<span>The button was clicked <!> times.</span>", /* next(1), over(1), replace */"Db%", void 0, [_clickCount$elseBody]));
const _onClick = _scope => {
  const {
    _: {
      clickCount
    }
  } = _scope;
  return function () {
    _queueSource(_scope._, _clickCount, clickCount + 1);
  };
};
const _clickCount$ifBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _clickCount$ifBody = /* @__PURE__ */_closure("clickCount", (_scope, clickCount) => {
  _data(_scope["#text/1"], clickCount);
  _queueEffect(_scope, _clickCount$ifBody_effect);
});
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<button> </button>", /* get, next(1), get */" D ", void 0, [_clickCount$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/0");
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => _if(_scope, clickCount < 3 ? _ifBody : _elseBody), _intersections([_inConditionalScope(_clickCount$ifBody, "#text/0"), _inConditionalScope(_clickCount$elseBody, "#text/0")]), _if);
const _setup = _scope => {
  _clickCount(_scope, 0);
};
export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko");