import _child from "./components/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const data = _child({}, _$.register(() => {}, "packages/translator-tags/src/__tests__/fixtures/custom-tag-var-expression/template.marko_0_data/var", _scope0_id));
  _$.write(`<div>${_$.escapeXML(data)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/custom-tag-var-expression/template.marko", _renderer);