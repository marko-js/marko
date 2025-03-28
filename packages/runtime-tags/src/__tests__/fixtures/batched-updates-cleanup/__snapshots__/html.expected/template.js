import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let show = true;
  let message = "hi";
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(message)}${_$.markResumeNode(_scope1_id, "#text/0")}</span>`);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "4:2");
      return 0;
    }
  }, _scope0_id, "#text/1", 1);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    show,
    message
  }, "__tests__/template.marko", 0, {
    show: "1:6",
    message: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});