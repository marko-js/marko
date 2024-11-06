import child1 from "./components/child1.marko";
import child2 from "./components/child2.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const tagName = child1;
  const val = 3;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, tagName, {
    value: val
  });
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<button></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName");
  _$.writeScope(_scope0_id, {
    "tagName": tagName,
    "val": val,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(tagName)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko");