import _counter from "./components/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const tagName = "div";
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, tagName, {}, _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    const _childScope = _$.peekNextScope();
    _counter({});
    _$.writeScope(_scope1_id, {
      "#childScope/0": _$.writeExistingScope(_childScope)
    });
  }), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_1_renderer", _scope0_id));
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<button id=changeTag></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName");
  _$.writeScope(_scope0_id, {
    "tagName": tagName,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(tagName)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko", _renderer);