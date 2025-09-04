import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let mounted = undefined;
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (mounted) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`AB<!>${_$.escapeXML(mounted && "C")}${_$.markResumeNode($scope1_id, "#text/0")}D`);
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "4:3");
      return 0;
    }
  }, $scope0_id, "#div/0", 1, /* state: mounted */1, "</div>");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    mounted
  }, "__tests__/template.marko", 0, {
    mounted: "1:5"
  });
  _$.resumeClosestBranch($scope0_id);
});