import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const ref = _$.nodeRef();
  const tagName = undefined;
  _$.write(`<!--Body Text-->${_$.markResumeNode(_scope0_id, "#comment/0")}`);
  const _return = tagName;
  _$.writeEffect(_scope0_id, "__tests__/tags/parent-el.marko_0");
  _$.debug(_$.writeScope(_scope0_id, {
    "/": _tagVar
  }), "__tests__/tags/parent-el.marko", 0, {
    "tagName": "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
  return _return;
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/parent-el.marko", _renderer);