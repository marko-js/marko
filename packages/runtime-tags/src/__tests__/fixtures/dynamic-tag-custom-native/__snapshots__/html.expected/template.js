import child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const tagName = child;
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", tagName, {
    id: "dynamic"
  });
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_tagName");
  _$.debug(_$.writeScope(_scope0_id, {
    "tagName": tagName,
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(tagName)
  }), "__tests__/template.marko", 0, {
    "tagName": "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);