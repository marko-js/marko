import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let show = true;
  const el = _$.nodeRef();
  _$.write(`<button>Toggle</button>${_$.markResumeNode($scope0_id, "#button/0")}<pre></pre>${_$.markResumeNode($scope0_id, "#pre/1")}`);
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const $scope1_id = _$.nextScopeId();
      _$.write("<div>child</div>");
      _$.writeEffect($scope1_id, "__tests__/template.marko_1");
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "6:2");
      return 0;
    }
  }, $scope0_id, "#text/2");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope($scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});