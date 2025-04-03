import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  const myObj = {
    foo: 1,
    bar: x + 1
  };
  _$.write(`<div>${_$.escapeXML(JSON.stringify(myObj))}${_$.markResumeNode($scope0_id, "#text/0")}</div><button>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});