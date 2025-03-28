import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/list/index.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.resumeSingleNodeForOf(input.item, item => {
    const _scope1_id = _$.nextScopeId();
    /* @__PURE__ */_$.dynamicTag(_scope1_id, "#text/0", item.content, {}, 0, 0, 1);
  }, 0, _scope0_id, "#text/0");
});