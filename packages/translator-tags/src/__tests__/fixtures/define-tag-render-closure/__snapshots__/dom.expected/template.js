import { data as _data, bindRenderer as _bindRenderer, on as _on, queueSource as _queueSource, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, register as _register, conditional as _conditional, value as _value, queueEffect as _queueEffect, dynamicSubscribers as _dynamicSubscribers, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _x$defineBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_1_x/subscriber", /* @__PURE__ */_dynamicClosure("x", (_scope, x) => _data(_scope["#text/0"], x)));
const _defineBody = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ", void 0, [_x$defineBody]));
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
const _myTag = /* @__PURE__ */_value("myTag", (_scope, myTag) => _dynamicTagName(_scope, myTag), void 0, _dynamicTagName);
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    x
  } = _scope;
  _queueSource(_scope, _x, x + 1);
}));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/2"], x);
  _queueEffect(_scope, _x_effect);
}, _dynamicSubscribers("x"));
const _setup = _scope => {
  _x(_scope, 1);
  _myTag(_scope, {
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _defineBody)
  });
};
export const _template_ = "<!><!><button> </button>";
export const _walks_ = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko");