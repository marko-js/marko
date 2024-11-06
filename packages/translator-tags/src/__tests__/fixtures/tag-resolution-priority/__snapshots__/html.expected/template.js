const div = "span";
const foo = "div";
const Bar = "div";
import * as _$ from "@marko/runtime-tags/debug/html";
import _foo from "./components/foo.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div></div>");
  const _childScope = _$.peekNextScope();
  _foo({});
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, Bar, {});
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/1")}`);
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(Bar)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/tag-resolution-priority/template.marko");