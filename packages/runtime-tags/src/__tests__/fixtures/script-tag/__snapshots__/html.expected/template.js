import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = 1;
  _$.write("<div id=ref>0</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});