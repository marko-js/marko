import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const items = [1, 2, 3];
  const el = _$.nodeRef();
  const write = _$.register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0/write", _scope0_id);
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div></div>${_$.markResumeNode(_scope0_id, "#div/1")}`);
  let _k = 0;
  const _scope1_ = new Map();
  _$.forOf(items, (item, _index) => {
    const _scope1_id = _$.nextScopeId();
    _$.write(_$.markResumeScopeStart(_scope1_id, _k++));
    const _childScope = _$.peekNextScope();
    _child({
      write: write,
      name: item
    });
    _$.writeScope(_scope1_id, {
      "#childScope/0": _$.writeExistingScope(_childScope)
    });
    _scope1_.set(_index, _$.getScopeById(_scope1_id));
  });
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/2"));
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    "items": items,
    "write": write,
    "#text/2(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko", _renderer);