import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let id = 0;
  let items = [{
    name: "Marko",
    description: "HTML Reimagined"
  }];
  _$.write("<div>");
  _$.resumeSingleNodeForOf(items, ({
    name,
    description
  }) => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(name)}${_$.markResumeNode($scope1_id, "#text/0")}: <!>${_$.escapeXML(description)}${_$.markResumeNode($scope1_id, "#text/1")}</div>`);
    _$.writeScope($scope1_id, {}, "__tests__/template.marko", "5:4");
  }, 0, $scope0_id, "#text/0");
  _$.write(`<button id=add>Add</button>${_$.markResumeNode($scope0_id, "#button/1")}<button id=remove>Remove</button>${_$.markResumeNode($scope0_id, "#button/2")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope($scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "3:8"
  });
  _$.resumeClosestBranch($scope0_id);
});