import "./foo";
import { b as c } from "./bar";
import bazComp from "./components/baz.marko";
import { peekSerializedScope as _peekSerializedScope, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _baz from "./components/baz.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekSerializedScope();
  bazComp._({});
  const _childScope2 = _peekSerializedScope();
  bazComp._({});
  const _childScope3 = _peekSerializedScope();
  _baz._({});
  _write(`${_escapeXML(c)}${_markResumeNode(_scope0_id, "#text/3")}`);
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope,
    "#childScope/1": _childScope2,
    "#childScope/2": _childScope3
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/import-tag/template.marko");