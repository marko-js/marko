import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  const _count = 0;
  const _count2 = 0;
  const _count3 = 0;
  _$.write(`<div><button>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div><button>${_$.escapeXML(_count)}${_$.markResumeNode(_scope0_id, "#text/3")}</button>${_$.markResumeNode(_scope0_id, "#button/2")}<div><button>${_$.escapeXML(_count2)}${_$.markResumeNode(_scope0_id, "#text/5")}</button>${_$.markResumeNode(_scope0_id, "#button/4")}</div></div></div><div><button>${_$.escapeXML(_count3)}${_$.markResumeNode(_scope0_id, "#text/7")}</button>${_$.markResumeNode(_scope0_id, "#button/6")}</div>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count3");
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count2");
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count");
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count,
    "_count": _count,
    "_count2": _count2,
    "_count3": _count3
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko", _renderer);