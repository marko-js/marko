import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  _$.write("<div>");
  _$.resumeForTo(input.to, input.from, input.step, n => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(n, _$.ensureScopeWithId(_scope1_id));
    _$.write(`${_$.escapeXML(n)}${_$.markResumeNode(_scope1_id, "#text/0")}, `);
    _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "2:4");
  }, _scope0_id, "#div/0", 1);
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    "input_from/3": input.from,
    "input_to/4": input.to,
    "input_step/5": input.step,
    "#div/0(": _scope1_.size ? _scope1_ : undefined
  }, "__tests__/template.marko", 0, {
    "input_from/3": ["input.from"],
    "input_to/4": ["input.to"],
    "input_step/5": ["input.step"]
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);