import { data as _data, intersection as _intersection, closure as _closure, createRenderer as _createRenderer, conditional as _conditional, inConditionalScope as _inConditionalScope, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_a_b$ifBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      a,
      b
    }
  } = _scope;
  _data(_scope["#text/0"], a + b);
});
const _b$ifBody = /* @__PURE__ */_closure("b", null, void 0, _expr_a_b$ifBody);
const _a$ifBody = /* @__PURE__ */_closure("a", null, void 0, _expr_a_b$ifBody);
const _ifBody = /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, [_a$ifBody, _b$ifBody]);
const _if = /* @__PURE__ */_conditional("#text/0");
const _b = /* @__PURE__ */_value("b", null, _inConditionalScope(_b$ifBody, "#text/0"));
const _a = /* @__PURE__ */_value("a", null, _inConditionalScope(_a$ifBody, "#text/0"));
const _setup = _scope => {
  _a(_scope, 0);
  _b(_scope, 0);
  _if(_scope, true ? _ifBody : null);
};
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, void 0, void 0, "packages/translator/src/__tests__/fixtures/basic-converge-in-if/template.marko");