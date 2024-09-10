export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import { on as _on, data as _data, queueSource as _queueSource, createRenderer as _createRenderer, value as _value, register as _register, queueEffect as _queueEffect, closure as _closure, registerRenderer as _registerRenderer, loopTo as _loopTo, inLoopScope as _inLoopScope, intersections as _intersections, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _i$forBody = /* @__PURE__ */_value("i", (_scope, i) => _data(_scope["#text/1"], i));
const _params_2$forBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _i$forBody(_scope, _params_2[0]));
const _onClick = _scope => {
  const {
    _: {
      num
    }
  } = _scope;
  return function () {
    _queueSource(_scope._, _num, num + 1);
  };
};
const _num$forBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/for-event-handler/template.marko_1_num", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _num$forBody = /* @__PURE__ */_closure("num", (_scope, num) => _queueEffect(_scope, _num$forBody_effect));
const _forBody = _registerRenderer("packages/translator-tags/src/__tests__/fixtures/for-event-handler/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<button> </button>", /* get, next(1), get */" D ", void 0, [_num$forBody], void 0, _params_2$forBody));
const _for = /* @__PURE__ */_loopTo("#text/0", _forBody);
const _num = /* @__PURE__ */_value("num", (_scope, num) => _for(_scope, [num, 0, 1]), _intersections([_for, _inLoopScope(_num$forBody, "#text/0")]));
export function _setup_(_scope) {
  _num(_scope, 0);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/for-event-handler/template.marko");