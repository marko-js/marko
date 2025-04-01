function noop(_) {}
_$.register(noop, "__tests__/template.marko_0/noop");
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let a = 0;
  let b = 0;
  let c = {};
  let d = 0;
  let e = [];
  _$.write(`<button><pre>a    1    <!>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/1")}</pre><pre>b    2    <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/2")}</pre><pre>c  {c:4}  <!>${_$.escapeXML(JSON.stringify(c))}${_$.markResumeNode(_scope0_id, "#text/3")}</pre><pre>d    7    <!>${_$.escapeXML(d)}${_$.markResumeNode(_scope0_id, "#text/4")}</pre><pre>f   [9]   <!>${_$.escapeXML(JSON.stringify(e))}${_$.markResumeNode(_scope0_id, "#text/5")}</pre></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.resumeClosestBranch(_scope0_id);
});