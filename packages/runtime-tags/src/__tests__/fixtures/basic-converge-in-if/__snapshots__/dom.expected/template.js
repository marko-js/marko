export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_a_b$if_content = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      a,
      b
    }
  } = _scope;
  _$.data(_scope["#text/0"], a + b);
});
const _b$if_content = /* @__PURE__ */_$.conditionalClosure("#text/0", () => _if_content, 0, () => _expr_a_b$if_content);
const _a$if_content = /* @__PURE__ */_$.conditionalClosure("#text/0", () => _if_content, 0, () => _expr_a_b$if_content);
const _setup$if_content = _scope => {
  _a$if_content._(_scope, _scope._["a"]);
  _b$if_content._(_scope, _scope._["b"]);
};
const _if_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
const _b = /* @__PURE__ */_$.state("b", (_scope, b) => _b$if_content(_scope, b));
const _a = /* @__PURE__ */_$.state("a", (_scope, a) => _a$if_content(_scope, a));
export function _setup_(_scope) {
  _a(_scope, 0);
  _b(_scope, 0);
  _if(_scope, true ? _if_content : null);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);