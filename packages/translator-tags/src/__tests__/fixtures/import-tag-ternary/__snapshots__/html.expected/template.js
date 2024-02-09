import baz from "./components/baz.marko";
import foo from "./components/foo.marko";
import { dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const _dynamicScope = _dynamicTagInput(x === 1 ? baz : foo, {});
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": x === 1 ? baz : foo
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/import-tag-ternary/template.marko");