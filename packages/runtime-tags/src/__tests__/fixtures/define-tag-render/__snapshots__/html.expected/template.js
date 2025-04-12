import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const MyTag = {
    content: _$.createContent("__tests__/template.marko_1_renderer", ({
      name
    }) => {
      const $scope1_id = _$.nextScopeId();
      let y = 1;
      _$.write(`<div>Hello <!>${_$.escapeXML(name)}${_$.markResumeNode($scope1_id, "#text/0")} <!>${_$.escapeXML(y)}${_$.markResumeNode($scope1_id, "#text/1")}</div><button>${_$.escapeXML(y)}${_$.markResumeNode($scope1_id, "#text/3")}</button>${_$.markResumeNode($scope1_id, "#button/2")}`);
      _$.writeEffect($scope1_id, "__tests__/template.marko_1_y");
      _$.writeScope($scope1_id, {
        y
      }, "__tests__/template.marko", "1:2", {
        y: "2:8"
      });
      _$.resumeClosestBranch($scope1_id);
    })
  };
  _$.dynamicTag($scope0_id, "#text/0", MyTag, {
    name: "Ryan"
  });
});