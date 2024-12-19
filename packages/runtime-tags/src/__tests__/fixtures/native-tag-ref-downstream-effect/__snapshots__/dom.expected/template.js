export const _template_ = "<div></div><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$if_content_effect = _$.effect("__tests__/template.marko_1", _scope => (_scope._["#div/0"].textContent = "hello"));
const _setup$if_content = _scope => {
  _setup$if_content_effect(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("", "", _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/1", 0);
export function _setup_(_scope) {
  _if(_scope, true ? _if_content : null);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);