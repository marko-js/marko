export const _template_ = "<!><!><button> </button>";
export const _walks_ = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
import { data as _data, bindRenderer as _bindRenderer, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, registerRenderer as _registerRenderer, conditional as _conditional, register as _register, queueEffect as _queueEffect, dynamicSubscribers as _dynamicSubscribers, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _x$defineBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_1_x/subscriber", /* @__PURE__ */_dynamicClosure("x", (_scope, x) => _data(_scope["#text/0"], x)));
const _defineBody = _registerRenderer("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ", void 0, [_x$defineBody]));
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _queueSource(_scope, _x, x + 1);
  };
};
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/2"], x);
  _queueEffect(_scope, _x_effect);
}, _dynamicSubscribers("x"));
const _myTag = /* @__PURE__ */_value("myTag", (_scope, myTag) => _dynamicTagName(_scope, myTag), _dynamicTagName);
export function _setup_(_scope) {
  _x(_scope, 1);
  _myTag(_scope, {
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _defineBody)
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko");