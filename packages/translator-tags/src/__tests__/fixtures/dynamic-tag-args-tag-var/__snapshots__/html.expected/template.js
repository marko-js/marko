import customTag from './components/custom-tag.marko';
const tags = [customTag];
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  _$.write(`<button>Count: <!>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _$.peekNextScope();
  const y = _$.dynamicTagInput(_dynamicScope, tags[0], x, void 0, _$.register(() => {}, "__tests__/template.marko_0_y/var", _scope0_id));
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/2")}<div>Parent: <!>${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/3")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x": x,
    "#text/2!": _$.writeExistingScope(_dynamicScope),
    "#text/2(": _$.normalizeDynamicRenderer(tags[0])
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);