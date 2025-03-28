import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = 1;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/2", input.content, {
    count: x,
    name: input.name
  }, 0, 0, 1);
  _$.writeEffect(_scope0_id, "__tests__/tags/custom-tag.marko_0_x");
  _$.writeScope(_scope0_id, {
    input_content: input.content,
    input_name: input.name,
    x
  }, "__tests__/tags/custom-tag.marko", 0, {
    input_content: ["input.content"],
    input_name: ["input.name"],
    x: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});