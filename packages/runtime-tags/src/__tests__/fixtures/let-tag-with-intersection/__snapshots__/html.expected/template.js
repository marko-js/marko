import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const y = x + 1;
  const z = x + 2;
  const a = y + z;
  _$.write(`<button>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/2")} <!>${_$.escapeXML(z)}${_$.markResumeNode(_scope0_id, "#text/3")} <!>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/4")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x/5": x
  }, "__tests__/template.marko", 0, {
    "x/5": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);