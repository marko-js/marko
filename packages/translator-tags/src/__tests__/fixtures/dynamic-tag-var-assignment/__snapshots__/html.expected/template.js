import Counter from "./components/counter.marko";
function getCounter() {
  return Counter; // breaks tag name analysis.
}
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.register(getCounter, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/template.marko_0/getCounter");
  const _dynamicScope = _$.peekNextScope();
  const count = _$.dynamicTagInput(_dynamicScope, getCounter(), {}, void 0, _$.register(() => {}, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/template.marko_0_count", _scope0_id));
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<button class=reset>reset</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/template.marko_0");
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(getCounter())
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/template.marko", _renderer);