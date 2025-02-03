import _myLet from "./tags/my-let.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _myTag from "./tags/my-tag.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const count = _myLet({
    value: 0
  }, _$.register(() => {}, "__tests__/template.marko_0_count/var", _scope0_id));
  const _childScope2 = _$.peekNextScope();
  _myTag({
    content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<button>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count/subscriber");
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count");
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      }), "__tests__/template.marko", "2:1");
      _$.resumeClosestBranch(_scope1_id);
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  });
  _$.debug(_$.writeScope(_scope0_id, {
    "count": count,
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/1": _$.writeExistingScope(_childScope2)
  }), "__tests__/template.marko", 0, {
    "count": "1:8"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);