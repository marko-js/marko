export const _template_ = `<button></button>${_customTag_template}<div><!></div>`;
export const _walks_ = /* get, over(1), beginChild, _customTag_walks, endChild, next(1), replace, out(1) */` b/${_customTag_walks}&D%l`;
const a = 1;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _input_ as _customTag_input, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./components/custom-tag.marko";
const _c$ifBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_3_c/subscriber", /* @__PURE__ */_$.dynamicClosure("c", (_scope, c) => _$.data(_scope["#text/2"], c), _scope => _scope._._));
const _b$ifBody = /* @__PURE__ */_$.dynamicClosure("b", (_scope, b) => _$.data(_scope["#text/1"], b), _scope => _scope._._);
const _setup$ifBody = _scope => {
  _$.data(_scope["#text/0"], a);
};
const _ifBody2 = /* @__PURE__ */_$.createRenderer("<!> <!> <!>", /* replace, over(2), replace, over(2), replace */"%c%c%", _setup$ifBody, () => [_c$ifBody, _b$ifBody]);
const _if$ifBody = /* @__PURE__ */_$.conditional("#text/0");
const _setup$ifBody2 = _scope => {
  _if$ifBody(_scope, Math.random() ? _ifBody2 : null);
};
const _ifBody = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", _setup$ifBody2);
const _c$customTagBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_c/subscriber", /* @__PURE__ */_$.dynamicClosure("c", (_scope, c) => _$.data(_scope["#text/2"], c)));
const _b$customTagBody = /* @__PURE__ */_$.dynamicClosure("b", (_scope, b) => _$.data(_scope["#text/1"], b));
const _setup$customTagBody = _scope => {
  _$.data(_scope["#text/0"], a);
};
const _customTagBody = _$.register("packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<!> <!> <!>", /* replace, over(2), replace, over(2), replace */"%c%c%", _setup$customTagBody, () => [_c$customTagBody, _b$customTagBody]));
const _if = /* @__PURE__ */_$.conditional("#text/2");
const _c = /* @__PURE__ */_$.state("c", null, () => _$.dynamicSubscribers("c"));
const _b = /* @__PURE__ */_$.value("b", null, () => _$.dynamicSubscribers("b"));
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_0", _scope => _$.on(_scope["#button/0"], "click", function () {
  _c(_scope, 4);
}));
export function _setup_(_scope) {
  _customTag(_scope["#childScope/1"]);
  _setup__effect(_scope);
  _b(_scope, 2);
  _c(_scope, 3);
  _customTag_input(_scope["#childScope/1"], {
    renderBody: _customTagBody(_scope)
  });
  _if(_scope, Math.random() ? _ifBody : null);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko");