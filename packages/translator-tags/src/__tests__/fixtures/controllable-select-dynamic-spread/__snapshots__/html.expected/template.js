import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const value = "b";
  const tag = "select";
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, tag ? "select" : {}, {
    value,
    valueChange(v) {
      value = v;
    }
  }, _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<option${_$.attrs({
      value: "a"
    }, "#option/0", _scope1_id, "option")}>A</option>${_$.markResumeNode(_scope1_id, "#option/0")}<option${_$.attrs({
      value: "b"
    }, "#option/1", _scope1_id, "option")}>B</option>${_$.markResumeNode(_scope1_id, "#option/1")}<option${_$.attrs({
      value: "c"
    }, "#option/2", _scope1_id, "option")}>C</option>${_$.markResumeNode(_scope1_id, "#option/2")}`);
    _$.writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko_1");
  }), "packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko_1_renderer", _scope0_id));
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<span>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/1")}</span>`);
  _$.writeScope(_scope0_id, {
    "value": value,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(tag ? "select" : {})
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko", _renderer);