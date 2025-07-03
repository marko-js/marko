import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let obj = {
    a: 1,
    b: 2,
    c: 3
  };
  const {
    a,
    ...partialObj
  } = obj;
  _$.write(`<div class=obj>${_$.escapeXML(JSON.stringify(obj))}${_$.markResumeNode($scope0_id, "#text/0")}</div><div class=partialObj>${_$.escapeXML(JSON.stringify(partialObj))}${_$.markResumeNode($scope0_id, "#text/1")}</div><div class=a>${_$.escapeXML(a)}${_$.markResumeNode($scope0_id, "#text/2")}</div><div class=b>${_$.escapeXML(partialObj.b)}${_$.markResumeNode($scope0_id, "#text/3")}</div><div class=a>${_$.escapeXML(partialObj.a === undefined ? "removed a" : "didn't remove a")}${_$.markResumeNode($scope0_id, "#text/4")}</div><button>Update</button>${_$.markResumeNode($scope0_id, "#button/5")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});