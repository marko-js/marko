import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  _$.forIn(input.children, (key, text) => {
    const _scope1_id = _$.nextScopeId();
    _forScopeIds.push(_scope1_id);
    _$.write(`<p>${_$.escapeXML(key)}${_$.markResumeNode(_scope1_id, "#text/0")}: <!>${_$.escapeXML(text)}${_$.markResumeNode(_scope1_id, "#text/1")}</p>`);
    _$.writeScope(_scope1_id, {});
    _scope1_.set(key, _$.getScopeById(_scope1_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  const _forScopeIds2 = [],
    _scope2_ = new Map();
  _$.forIn(input.children, key => {
    const _scope2_id = _$.nextScopeId();
    _forScopeIds2.push(_scope2_id);
    _$.write(`<p>${_$.escapeXML(key)}${_$.markResumeNode(_scope2_id, "#text/0")}</p>`);
    _$.writeScope(_scope2_id, {});
    _scope2_.set(key, _$.getScopeById(_scope2_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2)}</div>`);
  _$.writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko", _renderer);