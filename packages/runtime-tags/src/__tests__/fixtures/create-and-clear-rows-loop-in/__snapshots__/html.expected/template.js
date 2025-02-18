import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  const _scope2_ = new Map();
  _$.write("<div>");
  _$.resumeSingleNodeForIn(input.children, (key, text) => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(key, _$.ensureScopeWithId(_scope1_id));
    _$.write(`<p>${_$.escapeXML(key)}${_$.markResumeNode(_scope1_id, "#text/0")}: <!>${_$.escapeXML(text)}${_$.markResumeNode(_scope1_id, "#text/1")}</p>`);
    _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "2:4");
  }, _scope0_id, "#text/0");
  _$.resumeSingleNodeForIn(input.children, key => {
    const _scope2_id = _$.nextScopeId();
    _scope2_.set(key, _$.ensureScopeWithId(_scope2_id));
    _$.write(`<p>${_$.escapeXML(key)}${_$.markResumeNode(_scope2_id, "#text/0")}</p>`);
    _$.writeScope(_scope2_id, {}, "__tests__/template.marko", "5:4");
  }, _scope0_id, "#text/1");
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined
  }, "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);