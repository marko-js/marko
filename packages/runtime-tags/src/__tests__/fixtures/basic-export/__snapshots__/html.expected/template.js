export const v = 123;
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write(`<div>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
});