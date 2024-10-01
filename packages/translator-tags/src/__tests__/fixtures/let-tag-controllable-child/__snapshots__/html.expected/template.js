import { register as _register, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const source = 1;
  const _childScope = _peekNextScope();
  _child._({
    value: source,
    valueChange: _register(function (_new_source) {
      source = _new_source;
    }, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/template.marko_0/valueChange", _scope0_id)
  });
  _write(`source=<!>${_escapeXML(source)}${_markResumeNode(_scope0_id, "#text/1")}`);
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/template.marko");