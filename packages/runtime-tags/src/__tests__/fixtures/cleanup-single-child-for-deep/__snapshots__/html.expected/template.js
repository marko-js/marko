import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const items = [1, 2, 3];
  const el = _$.nodeRef();
  const write = _$.register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", _scope0_id);
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div></div>${_$.markResumeNode(_scope0_id, "#div/1")}`);
  const _scope1_ = new Map();
  _$.resumeSingleNodeForOf(items, (outerItem, _index2) => {
    const _scope1_id = _$.nextScopeId();
    _$.write("<div>");
    const _childScope = _$.peekNextScope();
    _child({
      write: write,
      name: `${outerItem}`
    });
    const _scope2_ = new Map();
    _$.resumeSingleNodeForOf(items, (middleItem, _index) => {
      const _scope2_id = _$.nextScopeId();
      _$.write("<div>");
      const _childScope2 = _$.peekNextScope();
      _child({
        write: write,
        name: `${outerItem}.${middleItem}`
      });
      _scope2_.set(_index, _$.ensureScopeWithId(_scope2_id));
      _$.write("</div>");
      _$.writeScope(_scope2_id, {
        "#childScope/0": _$.writeExistingScope(_childScope2),
        "_": _$.ensureScopeWithId(_scope1_id)
      });
    }, _scope1_id, "#text/1");
    _scope1_.set(_index2, _$.ensureScopeWithId(_scope1_id));
    _$.write("</div>");
    _$.writeScope(_scope1_id, {
      "outerItem": outerItem,
      "#childScope/0": _$.writeExistingScope(_childScope),
      "#text/1(": _scope2_.size ? _scope2_ : undefined,
      "_": _$.ensureScopeWithId(_scope0_id)
    });
  }, _scope0_id, "#text/2");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    "items": items,
    "write": write,
    "#text/2(": _scope1_.size ? _scope1_ : undefined
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);