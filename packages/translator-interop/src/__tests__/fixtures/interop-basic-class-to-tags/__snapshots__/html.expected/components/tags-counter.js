import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write(`<button id=tags${_$.attr("data-parent", input.count)}>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/components/tags-counter.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count/5": count
  }, "__tests__/components/tags-counter.marko", 0, {
    "count/5": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/components/tags-counter.marko", _renderer);