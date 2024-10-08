export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import { data as _data, createRenderer as _createRenderer, intersection as _intersection, closure as _closure, conditional as _conditional, inConditionalScope as _inConditionalScope, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_a_b$ifBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      a,
      b
    }
  } = _scope;
  _data(_scope["#text/0"], a + b);
});
const _b$ifBody = /* @__PURE__ */_closure("b", null, void 0, () => _expr_a_b$ifBody);
const _a$ifBody = /* @__PURE__ */_closure("a", null, void 0, () => _expr_a_b$ifBody);
const _ifBody = /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, () => [_a$ifBody, _b$ifBody]);
const _if = /* @__PURE__ */_conditional("#text/0");
const _b = /* @__PURE__ */_value("b", null, () => _inConditionalScope(_b$ifBody, "#text/0"));
const _a = /* @__PURE__ */_value("a", null, () => _inConditionalScope(_a$ifBody, "#text/0"));
export function _setup_(_scope) {
  _a(_scope, 0);
  _b(_scope, 0);
  _if(_scope, true ? _ifBody : null);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-converge-in-if/template.marko");