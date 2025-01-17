import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  let _ifScopeId, _ifRenderer;
  if (input.value) {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<span>${_$.escapeXML(input.value)}${_$.markResumeNode(_scope1_id, "#text/0")}</span>`);
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _$.markResumeCleanup(_scope1_id);
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}</div>`);
  _$.writeScope(_scope0_id, {
    "input_value": input.value,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);