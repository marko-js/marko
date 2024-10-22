import child from "./components/child/index.marko";
import { peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, register as _register, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, normalizeDynamicRenderer as _normalizeDynamicRenderer, write as _write, nodeRef as _nodeRef, markResumeNode as _markResumeNode, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekNextScope();
  const data1 = child({}, _register(() => {}, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var/template.marko_0_data1", _scope0_id));
  const _tagName = input.show && child;
  const _childScope2 = _peekNextScope();
  let data2 = void 0;
  if (_tagName) data2 = _tagName({});
  const _dynamicScope = _peekNextScope();
  const data3 = _dynamicTagInput(_dynamicScope, input.dynamic, {}, void 0, _register(() => {}, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var/template.marko_0_data3", _scope0_id));
  const _tagName2 = input.show && "div";
  _write(`${_markResumeControlEnd(_scope0_id, "#text/2")}`);
  const el1 = _nodeRef();
  if (_tagName2) _write(`<${_tagName2}>`);
  if (_tagName2) _write(`</${_tagName2}>`);
  _write(`${_markResumeNode(_scope0_id, "#inputShowDiv/3")}`);
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope),
    "#childScope/1": _writeExistingScope(_childScope2),
    "#text/2!": _writeExistingScope(_dynamicScope),
    "#text/2(": _normalizeDynamicRenderer(input.dynamic)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var/template.marko");