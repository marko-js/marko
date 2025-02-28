import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/2", input.content, {
    count: x,
    name: input.name
  });
  _$.writeEffect(_scope0_id, "__tests__/tags/custom-tag.marko_0_x");
  _$.writeScope(_scope0_id, {
    "input_content/5": input.content,
    "input_name/6": input.name,
    "x/7": x,
    "#text/2!": _$.writeExistingScope(_dynamicScope),
    "#text/2(": _$.normalizeDynamicRenderer(input.content)
  }, "__tests__/tags/custom-tag.marko", 0, {
    "input_content/5": ["input.content"],
    "input_name/6": ["input.name"],
    "x/7": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", _renderer);