import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const z = {
    x: 1,
    y: 2
  };
  const {
    x,
    y
  } = z;
  _$.write(`<div>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/1")}`);
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/const-tag-destructure/template.marko");