import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const className = "A";
  _$.write(`<p${_$.classAttr(className)}>paragraph</p>${_$.markResumeNode(_scope0_id, "#p/0")}<button></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className");
  _$.writeScope(_scope0_id, {
    "className": className
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko");