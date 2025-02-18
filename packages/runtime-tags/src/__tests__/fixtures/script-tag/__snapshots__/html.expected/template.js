import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  _$.write("<div id=ref>0</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    x: x
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);