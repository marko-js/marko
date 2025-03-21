import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = 1;
  let handler = _$.register(function (newValue) {
    x = newValue + 1;
  }, "__tests__/template.marko_0/handler", _scope0_id);
  let y = x;
  _$.write(`<button>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}|<!>${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_y");
  _$.writeScope(_scope0_id, {
    x,
    handler,
    y,
    "@TagVariableChangey": handler
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    handler: "2:6",
    y: "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});