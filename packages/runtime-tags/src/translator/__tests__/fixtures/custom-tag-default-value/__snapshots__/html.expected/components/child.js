import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const value = input.value;
  _$.write(`<!>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/0")} `);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/components/child.marko", _renderer);