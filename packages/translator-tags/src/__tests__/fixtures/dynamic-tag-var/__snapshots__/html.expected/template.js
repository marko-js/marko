import child from "./components/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const data1 = child({}, _$.register(() => {}, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var/template.marko_0_data1/var", _scope0_id));
  const _tagName = input.show && child;
  const _childScope2 = _$.peekNextScope();
  let data2 = void 0;
  if (_tagName) data2 = _tagName({});
  const _dynamicScope = _$.peekNextScope();
  const data3 = _$.dynamicTagInput(_dynamicScope, input.dynamic, {}, void 0, _$.register(() => {}, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var/template.marko_0_data3/var", _scope0_id));
  const _tagName2 = input.show && "div";
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/2"));
  const el1 = _$.nodeRef();
  if (_tagName2) _$.write(`<${_tagName2}>`);
  if (_tagName2) _$.write(`</${_tagName2}>`);
  _$.write(_$.markResumeNode(_scope0_id, "#inputShowDiv/3"));
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/1": _$.writeExistingScope(_childScope2),
    "#text/2!": _$.writeExistingScope(_dynamicScope),
    "#text/2(": _$.normalizeDynamicRenderer(input.dynamic)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var/template.marko", _renderer);