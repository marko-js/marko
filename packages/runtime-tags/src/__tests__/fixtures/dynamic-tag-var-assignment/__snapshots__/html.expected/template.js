import Counter from "./tags/counter.marko";
function getCounter() {
  return Counter; // breaks tag name analysis.
}
_$.register(getCounter, "__tests__/template.marko_0/getCounter");
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _dynamicScope = _$.peekNextScope();
  const count = _$.dynamicTag(_scope0_id, "#text/0", getCounter(), {}, 0, 0, 1);
  _$.setTagVar(_scope0_id, "#scopeOffset/1", _dynamicScope, "__tests__/template.marko_0_count/var");
  _$.write(`<button class=reset>reset</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
});