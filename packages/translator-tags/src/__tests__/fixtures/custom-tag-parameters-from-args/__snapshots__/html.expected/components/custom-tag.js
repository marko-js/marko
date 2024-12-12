import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const y = 10;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")},<!>${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagArgs(_dynamicScope, input.renderBody, [x, y]);
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/3"));
  _$.writeEffect(_scope0_id, "__tests__/components/custom-tag.marko_0_x_y");
  _$.writeScope(_scope0_id, {
    "x": x,
    "y": y,
    "#text/3!": _$.writeExistingScope(_dynamicScope),
    "#text/3(": _$.normalizeDynamicRenderer(input.renderBody)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/components/custom-tag.marko", _renderer);