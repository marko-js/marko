import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    name,
    write
  } = input;
  _$.write(`<div>${_$.escapeXML(name)}${_$.markResumeNode(_scope0_id, "#text/0")} a</div><span>${_$.escapeXML(name)}${_$.markResumeNode(_scope0_id, "#text/1")} a</span><p>${_$.escapeXML(name)}${_$.markResumeNode(_scope0_id, "#text/2")} a</p>${_$.markResumeCleanup(_scope0_id)}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/components/child.marko_0_name_write");
  _$.writeScope(_scope0_id, {
    "name": name,
    "write": write
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/components/child.marko");