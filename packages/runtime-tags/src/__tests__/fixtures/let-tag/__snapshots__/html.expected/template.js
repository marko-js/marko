import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const y = 1;
  _$.write(`<button>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x_y");
  _$.writeScope(_scope0_id, {
    x: x,
    y: y
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    y: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);