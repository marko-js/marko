import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    a
  } = input;
  const b = a * 2;
  _$.write(`<button>Increment</button>${_$.markResumeNode(_scope0_id, "#button/0")}${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/1")} <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_b");
  _$.writeScope(_scope0_id, {
    "b": b
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);