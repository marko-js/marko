import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.dynamicTag(_scope0_id, "#text/0", input.content, {}, 0, 0, 1);
  _$.dynamicTag(_scope0_id, "#text/1", input.content, {}, 0, 0, 1);
});