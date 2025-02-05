import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const items = ["a", "b", "c"];
  const index = 0;
  _$.write(`<div>${_$.escapeXML(items[0])}${_$.markResumeNode(_scope0_id, "#text/0")}</div><div>${_$.escapeXML(items[index])}${_$.markResumeNode(_scope0_id, "#text/1")}</div><button>Update</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items_index");
  _$.debug(_$.writeScope(_scope0_id, {
    "items": items,
    "index": index
  }), "__tests__/template.marko", 0, {
    "items": "1:5",
    "items_0": ["items[0]", "1:5"],
    "index": "2:5"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);