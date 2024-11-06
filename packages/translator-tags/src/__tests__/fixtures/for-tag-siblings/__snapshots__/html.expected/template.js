import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const arrA = [1, 2, 3];
  _$.write("<div>");
  _$.forOf(arrA, val => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(val)}${_$.markResumeNode(_scope1_id, "#text/0")}</div>`);
  });
  _$.write("</div><div>");
  _$.forOf(arrA, val => {
    const _scope2_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(val)}${_$.markResumeNode(_scope2_id, "#text/0")}</div>`);
  });
  _$.write("<div></div></div>");
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/for-tag-siblings/template.marko");