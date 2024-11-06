import * as _$ from "@marko/runtime-tags/debug/html";
import _FancyButton from "./components/FancyButton.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  const _childScope = _$.peekNextScope();
  _FancyButton({
    onClick: _$.register(function () {
      clickCount++;
    }, "packages/translator-tags/src/__tests__/fixtures/body-content/template.marko_0/onClick", _scope0_id),
    renderBody: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
      _$.writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/body-content/template.marko_1_clickCount/subscriber");
      _$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      });
    }), "packages/translator-tags/src/__tests__/fixtures/body-content/template.marko_1_renderer", _scope0_id)
  });
  _$.writeScope(_scope0_id, {
    "clickCount": clickCount,
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/body-content/template.marko", _renderer);