import * as _$ from "@marko/runtime-tags/debug/html";
import _helloSetter from "./components/hello-setter.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const el = _$.nodeRef(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/template.marko_0/#div");
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  const _childScope = _$.peekNextScope();
  _helloSetter({
    el: el
  });
  _$.writeScope(_scope0_id, {
    "#childScope/1": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/template.marko", _renderer);