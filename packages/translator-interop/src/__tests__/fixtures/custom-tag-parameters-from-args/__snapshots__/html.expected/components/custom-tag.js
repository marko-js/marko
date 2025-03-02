import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/components/custom-tag.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const y = 10;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")},<!>${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagArgs(_scope0_id, "#text/3", input.content, [x, y]);
  _$.writeEffect(_scope0_id, "__tests__/components/custom-tag.marko_0_x_y");
  _$.writeScope(_scope0_id, {
    input_content: input.content,
    x,
    y,
    "#text/3!": _$.writeExistingScope(_dynamicScope),
    "#text/3(": _$.dynamicTagId(input.content)
  }, "__tests__/components/custom-tag.marko", 0, {
    input_content: ["input.content"],
    x: "1:6",
    y: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});