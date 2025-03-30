export const _template_ = `<button></button>${_customTag_template}<div></div>`;
export const _walks_ = /* get, over(1), beginChild, _customTag_walks, endChild, get, over(1) */` b/${_customTag_walks}& b`;
const a = 1;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _input_content_ as _customTag_input_content, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./tags/custom-tag.marko";
const _c$if_content = /* @__PURE__ */_$.dynamicClosureRead("c", (_scope, c) => _$.data(_scope["#text/2"], c), _scope => _scope._._);
const _b$if_content = /* @__PURE__ */_$.dynamicClosureRead("b", (_scope, b) => _$.data(_scope["#text/1"], b), _scope => _scope._._);
const _setup$if_content = _scope => {
  _$.data(_scope["#text/0"], a);
};
const _if_content2 = /* @__PURE__ */_$.createRenderer("<!> <!> <!>", /* replace, over(2), replace, over(2), replace */"%c%c%", _setup$if_content, 0, _scope => {
  _b$if_content(_scope);
  _c$if_content(_scope);
});
const _if$if_content = /* @__PURE__ */_$.conditional("#text/0", _if_content2);
const _setup$if_content2 = _scope => {
  _if$if_content(_scope, Math.random() ? 0 : 1);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", _setup$if_content2);
const _c$customTag_content = /* @__PURE__ */_$.dynamicClosureRead("c", (_scope, c) => _$.data(_scope["#text/2"], c));
const _b$customTag_content = /* @__PURE__ */_$.dynamicClosureRead("b", (_scope, b) => _$.data(_scope["#text/1"], b));
const _setup$customTag_content = _scope => {
  _$.data(_scope["#text/0"], a);
};
const _customTag_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<!> <!> <!>", /* replace, over(2), replace, over(2), replace */"%c%c%", _setup$customTag_content, 0, _scope => {
  _b$customTag_content(_scope);
  _c$customTag_content(_scope);
});
const _if = /* @__PURE__ */_$.conditional("#div/2", _if_content);
const _c_closure = /* @__PURE__ */_$.dynamicClosure(_c$customTag_content, _c$if_content);
const _c = /* @__PURE__ */_$.state("c/4", _scope => _c_closure(_scope));
const _b = /* @__PURE__ */_$.value("b");
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => _$.on(_scope["#button/0"], "click", function () {
  _c(_scope, 4);
}));
export function _setup_(_scope) {
  _customTag(_scope["#childScope/1"]);
  _b(_scope, 2);
  _c(_scope, 3);
  _customTag_input_content(_scope["#childScope/1"], _customTag_content(_scope));
  _if(_scope, Math.random() ? 0 : 1);
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);