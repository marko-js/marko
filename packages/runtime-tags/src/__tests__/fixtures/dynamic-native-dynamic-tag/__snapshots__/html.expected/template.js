import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const tagName = "span";
  const className = "A";
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", tagName, {
    class: className
  }, _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write("body content");
  }), "__tests__/template.marko_1_renderer", _scope0_id));
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_tagName");
  _$.writeScope(_scope0_id, {
    tagName,
    className,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(tagName)
  }, "__tests__/template.marko", 0, {
    tagName: "1:6",
    className: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);