import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const el = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  if (true) {
    const _scope1_id = _$.nextScopeId();
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1");
    _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "2:2");
  }
  _$.writeScope(_scope0_id, {}, "__tests__/template.marko", 0);
});