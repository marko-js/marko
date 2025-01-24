import Counter from "./tags/counter.marko";
function getCounter() {
  return Counter; // breaks tag name analysis.
}
_$.register(getCounter, "__tests__/template.marko_0/getCounter");
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _dynamicScope = _$.peekNextScope();
  const count = _$.dynamicTagInput(_scope0_id, "#text/0", getCounter(), {}, void 0, _$.register(() => {}, "__tests__/template.marko_0_count/var", _scope0_id));
  _$.write(`<button class=reset>reset</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(getCounter())
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);