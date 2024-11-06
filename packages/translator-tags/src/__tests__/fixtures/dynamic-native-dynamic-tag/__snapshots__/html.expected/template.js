import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const tagName = "span";
  const className = "A";
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, tagName, {
    class: className
  }, _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write("body content");
  }), "packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_1_renderer", _scope0_id));
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<button></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_0_tagName");
  _$.writeScope(_scope0_id, {
    "tagName": tagName,
    "className": className,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(tagName)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko");