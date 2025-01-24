import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const arrA = [1, 2, 3];
  _$.forOf(arrA, (val, i) => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(i)}: ${_$.escapeXML(val)}</div>`);
  });
  const arrB = [1, 2, 3];
  const _scope2_ = new Map();
  _$.resumeSingleNodeForOf(arrB, (val, i) => {
    const _scope2_id = _$.nextScopeId();
    _scope2_.set(i, _$.ensureScopeWithId(_scope2_id));
    _$.write(`<div>${_$.escapeXML(i)}${_$.markResumeNode(_scope2_id, "#text/0")}: <!>${_$.escapeXML(val)}${_$.markResumeNode(_scope2_id, "#text/1")}</div>`);
    _$.writeScope(_scope2_id, {});
  }, _scope0_id, "#text/1");
  _$.writeScope(_scope0_id, {
    "#text/1(": _scope2_.size ? _scope2_ : undefined
  });
  _$.markResumeParentBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);