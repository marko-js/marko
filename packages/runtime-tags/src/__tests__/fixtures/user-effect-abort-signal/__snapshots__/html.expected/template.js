import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const a = 0;
  const b = 0;
  _$.write(`<div>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/0")} <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_input_value");
  _$.writeScope(_scope0_id, {
    "input_value": input.value
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);