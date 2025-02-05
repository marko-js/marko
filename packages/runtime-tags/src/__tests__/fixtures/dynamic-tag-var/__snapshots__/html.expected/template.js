import child from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const data1 = child({});
  _$.setTagVar(_scope0_id, _childScope, "__tests__/template.marko_0_data1/var");
  const _tagName = input.show && child;
  const _childScope2 = _$.peekNextScope();
  let data2 = void 0;
  _$.setTagVar(_scope0_id, _childScope2, "__tests__/template.marko_0_data2/var");
  if (_tagName) data2 = _tagName({});
  const _dynamicScope = _$.peekNextScope();
  _$.setTagVar(_scope0_id, _dynamicScope, "__tests__/template.marko_0_data3/var");
  const data3 = _$.dynamicTagInput(_scope0_id, "#text/2", input.dynamic, {}, void 0);
  const _tagName2 = input.show && "div";
  const el1 = _$.nodeRef();
  if (_tagName2) _$.write(`<${_tagName2}>`);
  if (_tagName2) _$.write(`</${_tagName2}>`);
  _$.write(_$.markResumeNode(_scope0_id, "#inputShowDiv/3"));
  _$.debug(_$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/1": _$.writeExistingScope(_childScope2),
    "#text/2!": _$.writeExistingScope(_dynamicScope),
    "#text/2(": _$.normalizeDynamicRenderer(input.dynamic)
  }), "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);