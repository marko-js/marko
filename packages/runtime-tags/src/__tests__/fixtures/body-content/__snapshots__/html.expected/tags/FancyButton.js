import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    content,
    ...attrs
  } = input;
  _$.write(`<button${_$.attrs(attrs, "#button/0", _scope0_id, "button")}>`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", content, {});
  _$.write(`</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/tags/FancyButton.marko_0_attrs");
  _$.writeScope(_scope0_id, {
    attrs,
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(content)
  }, "__tests__/tags/FancyButton.marko", 0, {
    attrs: "1:22"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/FancyButton.marko", _renderer);