function noop(_) {}
_$.register(noop, "__tests__/template.marko_0/noop");
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const a = 0;
  const b = 0;
  const c = {};
  const d = 0;
  const e = [];
  _$.write(`<button><pre>a    1    <!>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/1")}</pre><pre>b    2    <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/2")}</pre><pre>c  {c:4}  <!>${_$.escapeXML(JSON.stringify(c))}${_$.markResumeNode(_scope0_id, "#text/3")}</pre><pre>d    7    <!>${_$.escapeXML(d)}${_$.markResumeNode(_scope0_id, "#text/4")}</pre><pre>f   [9]   <!>${_$.escapeXML(JSON.stringify(e))}${_$.markResumeNode(_scope0_id, "#text/5")}</pre></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.markResumeParentBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);