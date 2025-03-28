import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let items = [0, 1];
  _$.write(`<button>Push</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.resumeSingleNodeForOf(items, outer => {
    const _scope1_id = _$.nextScopeId();
    _$.resumeSingleNodeForOf(items, inner => {
      const _scope2_id = _$.nextScopeId();
      const _childScope = _$.peekNextScope();
      _child({
        name: `${outer}.${inner}`
      });
      _$.writeScope(_scope2_id, {
        "#childScope/0": _$.writeExistingScope(_childScope),
        _: _$.ensureScopeWithId(_scope1_id)
      }, "__tests__/template.marko", "5:4");
    }, 0, _scope1_id, "#text/0");
    _$.writeScope(_scope1_id, {
      outer,
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "4:2", {
      outer: "4:6"
    });
  }, 0, _scope0_id, "#text/1");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});