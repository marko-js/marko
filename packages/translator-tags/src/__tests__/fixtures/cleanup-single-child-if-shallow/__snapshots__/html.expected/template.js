import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const show = true;
  const el = _$.nodeRef();
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div></div>${_$.markResumeNode(_scope0_id, "#div/1")}`);
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _$.nextScopeId();
    const _childScope = _$.peekNextScope();
    _child({
      write: _$.register(function (state) {
        el().innerHTML = state;
      }, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/template.marko_1/write", _scope1_id)
    });
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id),
      "#childScope/0": _$.writeExistingScope(_childScope)
    });
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _$.write(_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/2", _ifScopeId));
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    "show": show,
    "#text/2(": _ifRenderer,
    "#text/2!": _$.getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/template.marko", _renderer);