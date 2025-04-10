import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let open = true;
  let list = [1, 2, 3];
  _$.write(`<ul${_$.attr("hidden", !open)}>`);
  _$.resumeSingleNodeForOf(list, x => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<li>${_$.escapeXML(x)}${_$.markResumeNode($scope1_id, "#text/0")}</li>`);
    _$.writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
  }, function (x) {
    return x;
  }, $scope0_id, "#ul/0", 1, 1);
  _$.write(`</ul><button id=toggle>Toggle</button>${_$.markResumeNode($scope0_id, "#button/1")}<button id=reverse>Reverse</button>${_$.markResumeNode($scope0_id, "#button/2")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_list");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_open");
  _$.writeScope($scope0_id, {
    open,
    list
  }, "__tests__/template.marko", 0, {
    open: "1:6",
    list: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});