import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const el = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  const _return = _$.register(function (html) {
    el().innerHTML = html;
  }, "__tests__/tags/child.marko_0/_return", _scope0_id);
  _$.writeScope(_scope0_id, {}, "__tests__/tags/child.marko", 0);
  return _return;
});