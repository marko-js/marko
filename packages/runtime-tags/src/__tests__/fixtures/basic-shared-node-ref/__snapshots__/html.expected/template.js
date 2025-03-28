import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let open = true;
  let list = [1, 2, 3];
  _$.write(`<ul${_$.attr("hidden", !open)}>`);
  _$.resumeSingleNodeForOf(list, x => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<li>${_$.escapeXML(x)}${_$.markResumeNode(_scope1_id, "#text/0")}</li>`);
  }, function (x) {
    return x;
  }, _scope0_id, "#ul/0", 1);
  _$.write(`</ul><button id=toggle>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=reverse>Reverse</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_list");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_open");
  _$.writeScope(_scope0_id, {
    open,
    list
  }, "__tests__/template.marko", 0, {
    open: "1:6",
    list: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});