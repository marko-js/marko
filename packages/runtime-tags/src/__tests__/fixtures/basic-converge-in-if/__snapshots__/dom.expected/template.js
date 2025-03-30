export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_a_b$if_content = /* @__PURE__ */_$.intersection(1, _scope => {
  const {
    _: {
      a,
      b
    }
  } = _scope;
  _$.data(_scope["#text/0"], a + b);
});
const _b$if_content = /* @__PURE__ */_$.conditionalClosure("b", "#text/0", 0, _scope => _expr_a_b$if_content(_scope));
const _a$if_content = /* @__PURE__ */_$.conditionalClosure("a", "#text/0", 0, _scope => _expr_a_b$if_content(_scope));
const _if_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, 0, _scope => {
  _a$if_content._(_scope);
  _b$if_content._(_scope);
});
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
const _b = /* @__PURE__ */_$.state("b/2", _scope => _b$if_content(_scope));
const _a = /* @__PURE__ */_$.state("a/1", _scope => _a$if_content(_scope));
export function _setup_(_scope) {
  _a(_scope, 0);
  _b(_scope, 0);
  _if(_scope, true ? 0 : 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);