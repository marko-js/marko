import _displayIntersection from "./components/display-intersection.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  const _childScope = _$.peekNextScope();
  _displayIntersection({
    value: count
  });
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count,
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko", _renderer);