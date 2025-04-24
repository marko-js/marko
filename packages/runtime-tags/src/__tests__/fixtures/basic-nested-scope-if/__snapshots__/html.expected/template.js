import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let clickCount = 0;
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (clickCount < 3) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<button>${_$.escapeXML(clickCount)}${_$.markResumeNode($scope1_id, "#text/1")}</button>${_$.markResumeNode($scope1_id, "#button/0")}`);
      _$.writeEffect($scope1_id, "__tests__/template.marko_1_clickCount");
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "3:4");
      return 0;
    } else {
      const $scope2_id = _$.nextScopeId();
      _$.write(`<span>The button was clicked <!>${_$.escapeXML(clickCount)}${_$.markResumeNode($scope2_id, "#text/0")} times.</span>`);
      _$.writeScope($scope2_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "8:4");
      return 1;
    }
  }, $scope0_id, "#text/0", 1, /* state: clickCount */1, 0, 1);
  _$.write("</div>");
  _$.writeScope($scope0_id, {
    clickCount
  }, "__tests__/template.marko", 0, {
    clickCount: "2:8"
  });
  _$.resumeClosestBranch($scope0_id);
});