function createWrapper(a) {
  return {
    a
  };
}
_$.register(createWrapper, "__tests__/template.marko_0/createWrapper");
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  const {
    a,
    a: b
  } = createWrapper(count);
  _$.write(`<button>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/1")} <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.debug(_$.writeScope(_scope0_id, {
    "count": count
  }), "__tests__/template.marko", 0, {
    "count": "5:6",
    "_pattern_": "6:8",
    "a": "6:10",
    "b": "6:16"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);