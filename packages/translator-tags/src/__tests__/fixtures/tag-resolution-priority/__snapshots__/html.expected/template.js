const div = "span";
const foo = "div";
const Bar = "div";
import { write as _write, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _foo from "./components/foo.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<div></div>");
  const _childScope = _peekNextScope();
  _foo._({});
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, Bar, {});
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}`);
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope),
    "#text/1!": _writeExistingScope(_dynamicScope),
    "#text/1(": Bar
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/tag-resolution-priority/template.marko");