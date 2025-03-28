import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let num = 0;
  _$.resumeSingleNodeForTo(num, 0, 1, i => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<button>${_$.escapeXML(i)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_num");
    _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "3:2");
  }, 0, _scope0_id, "#text/0");
  _$.writeScope(_scope0_id, {
    num
  }, "__tests__/template.marko", 0, {
    num: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});