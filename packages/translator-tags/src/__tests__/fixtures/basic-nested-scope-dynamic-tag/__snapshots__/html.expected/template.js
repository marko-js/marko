import Child from "./components/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, false || Child, {}, _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<button>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count/subscriber");
    _$.writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count");
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
  }), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_renderer", _scope0_id));
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}`);
  _$.writeScope(_scope0_id, {
    "count": count,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(false || Child)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko", _renderer);