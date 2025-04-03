import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $showInner_closures = new Set();
  let showOuter = true;
  let showMiddle = true;
  let showInner = true;
  const el = _$.nodeRef();
  const write = _$.register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", $scope0_id);
  _$.write(`<button id=outer>Toggle Outer</button>${_$.markResumeNode($scope0_id, "#button/0")}<button id=middle>Toggle Middle</button>${_$.markResumeNode($scope0_id, "#button/1")}<button id=inner>Toggle Inner</button>${_$.markResumeNode($scope0_id, "#button/2")}<pre></pre>${_$.markResumeNode($scope0_id, "#pre/3")}`);
  _$.resumeSingleNodeConditional(() => {
    if (showOuter) {
      const $scope1_id = _$.nextScopeId();
      _$.write("<div>");
      _child({
        write: write,
        name: "Outer"
      });
      _$.resumeSingleNodeConditional(() => {
        if (showMiddle) {
          const $scope2_id = _$.nextScopeId();
          _$.write("<div>");
          _child({
            write: write,
            name: "Middle"
          });
          _$.resumeConditional(() => {
            if (showInner) {
              const $scope3_id = _$.nextScopeId();
              _child({
                write: write,
                name: "Inner"
              });
              return 0;
            }
          }, $scope2_id, "#text/1", 1);
          _$.write("</div>");
          _$.writeSubscribe($showInner_closures, _$.writeScope($scope2_id, {
            _: _$.ensureScopeWithId($scope1_id),
            "ClosureSignalIndex:showInner": 0
          }, "__tests__/template.marko", "14:6"));
          return 0;
        }
      }, $scope1_id, "#text/1", 1);
      _$.write("</div>");
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "11:2");
      return 0;
    }
  }, $scope0_id, "#text/4", 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_showInner");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_showMiddle");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_showOuter");
  _$.writeScope($scope0_id, {
    showOuter,
    showMiddle,
    showInner,
    write,
    "ClosureScopes:showInner": $showInner_closures
  }, "__tests__/template.marko", 0, {
    showOuter: "1:6",
    showMiddle: "2:6",
    showInner: "3:6",
    write: "9:8"
  });
  _$.resumeClosestBranch($scope0_id);
});