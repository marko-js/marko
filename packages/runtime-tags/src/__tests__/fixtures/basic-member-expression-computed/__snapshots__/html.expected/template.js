import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let items = ["a", "b", "c"];
  let index = 0;
  _$.write(`<div>${_$.escapeXML(items[0])}${_$.markResumeNode($scope0_id, "#text/0")}</div><div>${_$.escapeXML(items[index])}${_$.markResumeNode($scope0_id, "#text/1")}</div><button>Update</button>${_$.markResumeNode($scope0_id, "#button/2")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_items_index");
  _$.writeScope($scope0_id, {
    items,
    index
  }, "__tests__/template.marko", 0, {
    items: "1:5",
    index: "2:5"
  });
  _$.resumeClosestBranch($scope0_id);
});