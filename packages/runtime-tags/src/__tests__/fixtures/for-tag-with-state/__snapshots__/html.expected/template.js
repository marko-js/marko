import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _scope2_ = new Map();
  const arrA = [1, 2, 3];
  _$.forOf(arrA, (val, i) => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(i)}: ${_$.escapeXML(val)}</div>`);
  });
  let arrB = [1, 2, 3];
  _$.resumeSingleNodeForOf(arrB, (val, i) => {
    const _scope2_id = _$.nextScopeId();
    _scope2_.set(i, _$.ensureScopeWithId(_scope2_id));
    _$.write(`<div>${_$.escapeXML(i)}${_$.markResumeNode(_scope2_id, "#text/0")}: <!>${_$.escapeXML(val)}${_$.markResumeNode(_scope2_id, "#text/1")}</div>`);
    _$.writeScope(_scope2_id, {}, "__tests__/template.marko", "9:2");
  }, _scope0_id, "#text/1");
  _$.writeScope(_scope0_id, {
    "LoopScopeMap:#text/1": _scope2_.size ? _scope2_ : undefined
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch(_scope0_id);
});