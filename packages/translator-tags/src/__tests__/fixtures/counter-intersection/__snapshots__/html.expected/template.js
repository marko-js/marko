import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const a = 0;
  const b = 0;
  _$.write(`<div><button class=a>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")} + <button class=b>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/3")}</button>${_$.markResumeNode(_scope0_id, "#button/2")} = <!>${_$.escapeXML(a + b)}${_$.markResumeNode(_scope0_id, "#text/4")}</div>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/counter-intersection/template.marko_0");
  _$.writeScope(_scope0_id, {
    "a": a,
    "b": b
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/counter-intersection/template.marko", _renderer);