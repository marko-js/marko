import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const x = 0;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _return = x + input.extra;
  _$.writeEffect(_scope0_id, "__tests__/tags/child.marko_0_x");
  _$.writeScope(_scope0_id, {
    "input_extra/4": input.extra,
    "x/5": x
  }, "__tests__/tags/child.marko", 0, {
    "input_extra/4": ["input.extra"],
    "x/5": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
  return _return;
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _renderer);