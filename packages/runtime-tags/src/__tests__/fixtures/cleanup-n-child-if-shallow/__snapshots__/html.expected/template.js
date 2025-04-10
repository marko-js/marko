import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let show = true;
  const el = _$.nodeRef();
  _$.write(`<button>Toggle</button>${_$.markResumeNode($scope0_id, "#button/0")}<div></div>${_$.markResumeNode($scope0_id, "#div/1")}`);
  _$.resumeConditional(() => {
    if (show) {
      const $scope1_id = _$.nextScopeId();
      _child({
        write: _$.register(function (state) {
          el().innerHTML = state;
        }, "__tests__/template.marko_1/write", $scope1_id)
      });
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "6:2");
      return 0;
    }
  }, $scope0_id, "#text/2", 1, 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope($scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});