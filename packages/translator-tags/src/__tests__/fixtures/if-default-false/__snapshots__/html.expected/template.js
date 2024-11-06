import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const show = false;
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _$.nextScopeId();
    _$.write("hi");
    _$.writeScope(_scope1_id, {});
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _ifScopeId)}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    "show": show,
    "#text/1(": _ifRenderer,
    "#text/1!": _$.getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko");