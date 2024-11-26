export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_a_b$ifBody = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      a,
      b
    }
  } = _scope;
  _$.data(_scope["#text/0"], a + b);
});
const _b$ifBody = /* @__PURE__ */_$.closure("b", 0, void 0, () => _expr_a_b$ifBody);
const _a$ifBody = /* @__PURE__ */_$.closure("a", 0, void 0, () => _expr_a_b$ifBody);
const _ifBody = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, () => [_b$ifBody, _a$ifBody]);
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
const _b = /* @__PURE__ */_$.state("b", 0, () => _$.inConditionalScope(_b$ifBody, "#text/0"));
const _a = /* @__PURE__ */_$.state("a", 0, () => _$.inConditionalScope(_a$ifBody, "#text/0"));
export function _setup_(_scope) {
  _a(_scope, 0);
  _b(_scope, 0);
  _if(_scope, true ? _ifBody : null);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-converge-in-if/template.marko", _template_, _walks_, _setup_);