import _counter from "./components/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const count = _counter({}, _$.register(() => {}, "packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/template.marko_0_count", _scope0_id));
  _$.write(`<button class=reset>reset</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/template.marko_0");
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/template.marko", _renderer);