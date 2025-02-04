import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  _$.resumeSingleNodeForOf(input.item, (item, _index) => {
    const _scope1_id = _$.nextScopeId();
    const _dynamicScope = _$.peekNextScope();
    _$.dynamicTagInput(_scope1_id, "#text/0", item.content, {});
    _scope1_.set(_index, _$.ensureScopeWithId(_scope1_id));
    _$.debug(_$.writeScope(_scope1_id, {
      "#text/0!": _$.writeExistingScope(_dynamicScope),
      "#text/0(": _$.normalizeDynamicRenderer(item.content)
    }), "__tests__/tags/list/index.marko", "1:1", {
      "item": "1:5",
      "item_content": ["item.content", "1:5"]
    });
  }, _scope0_id, "#text/0");
  _$.debug(_$.writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  }), "__tests__/tags/list/index.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/list/index.marko", _renderer);