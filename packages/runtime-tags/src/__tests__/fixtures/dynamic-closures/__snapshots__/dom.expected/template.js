export const _template_ = `<button></button>${_customTag_template}<div><!></div>`;
export const _walks_ = /* get, over(1), beginChild, _customTag_walks, endChild, next(1), replace, out(1) */` b/${_customTag_walks}&D%l`;
const a = 1;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _input_content_ as _customTag_input_content, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./tags/custom-tag.marko";
const _c$if_content = _$.registerSubscriber("__tests__/template.marko_3_c/subscriber", /* @__PURE__ */_$.dynamicClosure("c", (_scope, c) => _$.data(_scope["#text/2"], c), _scope => _scope._._));
const _b$if_content = /* @__PURE__ */_$.dynamicClosure("b", (_scope, b) => _$.data(_scope["#text/1"], b), _scope => _scope._._);
const _setup$if_content = _scope => {
  _$.data(_scope["#text/0"], a);
  _b$if_content._(_scope, _scope._._["b"]);
  _c$if_content._(_scope, _scope._._["c"]);
};
const _if_content2 = /* @__PURE__ */_$.createRenderer("<!> <!> <!>", /* replace, over(2), replace, over(2), replace */"%c%c%", _setup$if_content);
const _if$if_content = /* @__PURE__ */_$.conditional("#text/0", 0);
const _setup$if_content2 = _scope => {
  _if$if_content(_scope, Math.random() ? _if_content2 : null);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", _setup$if_content2);
const _c$customTag_content = _$.registerSubscriber("__tests__/template.marko_1_c/subscriber", /* @__PURE__ */_$.dynamicClosure("c", (_scope, c) => _$.data(_scope["#text/2"], c)));
const _b$customTag_content = /* @__PURE__ */_$.dynamicClosure("b", (_scope, b) => _$.data(_scope["#text/1"], b));
const _setup$customTag_content = _scope => {
  _$.data(_scope["#text/0"], a);
  _b$customTag_content._(_scope, _scope._["b"]);
  _c$customTag_content._(_scope, _scope._["c"]);
};
const _customTag_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<!> <!> <!>", /* replace, over(2), replace, over(2), replace */"%c%c%", _setup$customTag_content));
const _if = /* @__PURE__ */_$.conditional("#text/2", 0);
const _c = /* @__PURE__ */_$.state("c", (_scope, c) => {
  _c$customTag_content(_scope, c);
  _c$if_content(_scope, c);
});
const _b = /* @__PURE__ */_$.value("b", 0);
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => _$.on(_scope["#button/0"], "click", function () {
  _c(_scope, 4);
}));
export function _setup_(_scope) {
  _customTag(_scope["#childScope/1"]);
  _setup__effect(_scope);
  _b(_scope, 2);
  _c(_scope, 3);
  _customTag_input_content(_scope["#childScope/1"], _customTag_content(_scope));
  _if(_scope, Math.random() ? _if_content : null);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);