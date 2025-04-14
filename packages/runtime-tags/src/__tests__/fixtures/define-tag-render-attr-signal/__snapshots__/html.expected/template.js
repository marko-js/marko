import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  const MyTag = {
    content: _$.registerContent("__tests__/template.marko_1_renderer", ({
      number
    }) => {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<div>${_$.escapeXML(number)}${_$.markResumeNode($scope1_id, "#text/0")}</div>`);
      _$.writeScope($scope1_id, {}, "__tests__/template.marko", "2:2");
    }, $scope0_id)
  };
  _$.dynamicTag($scope0_id, "#text/0", MyTag, {
    number: x
  });
  _$.write(`<button>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope($scope0_id, {
    x,
    MyTag
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    MyTag: "2:9"
  });
  _$.resumeClosestBranch($scope0_id);
});