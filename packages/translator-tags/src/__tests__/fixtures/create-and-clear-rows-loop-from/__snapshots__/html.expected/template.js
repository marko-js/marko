import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  let _k = 0;
  const _scope1_ = new Map();
  _$.forTo(input.to, input.from, input.step, n => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`${_$.markResumeScopeStart(_scope1_id, _k++)}${_$.escapeXML(n)}${_$.markResumeNode(_scope1_id, "#text/0")}, `);
    _$.writeScope(_scope1_id, {});
    _scope1_.set(n, _$.getScopeById(_scope1_id));
  });
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#div/0")}</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeScope(_scope0_id, {
    "#div/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-from/template.marko", _renderer);