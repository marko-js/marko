import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    name,
    write
  } = input;
  _$.write(`<div>${_$.escapeXML(name)}${_$.markResumeNode($scope0_id, "#text/0")} a</div><span>${_$.escapeXML(name)}${_$.markResumeNode($scope0_id, "#text/1")} a</span><p>${_$.escapeXML(name)}${_$.markResumeNode($scope0_id, "#text/2")} a</p>`);
  _$.writeEffect($scope0_id, "__tests__/tags/child.marko_0_name_write");
  _$.writeScope($scope0_id, {
    name,
    write
  }, "__tests__/tags/child.marko", 0, {
    name: "1:9",
    write: "1:15"
  });
  _$.resumeClosestBranch($scope0_id);
});