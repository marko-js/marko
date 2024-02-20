import { data as _data, bindRenderer as _bindRenderer, on as _on, queueSource as _queueSource, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, conditional as _conditional, value as _value, register as _register, queueEffect as _queueEffect, dynamicSubscribers as _dynamicSubscribers, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _x$defineBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_1_x/subscriber", /* @__PURE__ */_dynamicClosure("x", (_scope, x) => _data(_scope["#text/0"], x)));
const _defineBody = /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ", void 0, [_x$defineBody]);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
const _myTag = /* @__PURE__ */_value("myTag", (_scope, myTag) => _dynamicTagName(_scope, myTag.renderBody), void 0, _dynamicTagName);
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
export const template = "<!><button> </button>";
export const walks = /* replace, over(1), get, next(1), get, out(1) */"%b D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko");