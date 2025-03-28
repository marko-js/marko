import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    children
  } = input;
  _$.write("<div>");
  _$.resumeSingleNodeForOf(children, child => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(child.text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
  }, function (c) {
    return c.id;
  }, _scope0_id, "#div/0", 1);
  _$.write("</div>");
});