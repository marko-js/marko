import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _return = x;
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x": x,
    "/": _tagVar
  });
  return _return;
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko", _renderer);