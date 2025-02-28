import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>child</div>");
  _$.writeEffect(_scope0_id, "__tests__/tags/child.marko_0_input");
  _$.writeScope(_scope0_id, {
    "input/1": input
  }, "__tests__/tags/child.marko", 0, {
    "input/1": 0
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _renderer);