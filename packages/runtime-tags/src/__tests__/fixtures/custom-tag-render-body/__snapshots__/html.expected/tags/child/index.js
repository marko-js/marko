import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child/index.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    name,
    content
  } = input;
  _$.write(`<!>${_$.escapeXML(name)}${_$.markResumeNode(_scope0_id, "#text/0")}`);
  _$.dynamicTag(_scope0_id, "#text/1", content, {}, 0, 0, 1);
});