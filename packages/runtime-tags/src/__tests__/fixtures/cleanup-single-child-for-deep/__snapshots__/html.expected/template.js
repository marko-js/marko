import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let items = [1, 2, 3];
  const el = _$.nodeRef();
  const write = _$.register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", $scope0_id);
  _$.write(`<button>Toggle</button>${_$.markResumeNode($scope0_id, "#button/0")}<div></div>${_$.markResumeNode($scope0_id, "#div/1")}`);
  _$.resumeSingleNodeForOf(items, outerItem => {
    const $scope1_id = _$.nextScopeId();
    _$.write("<div>");
    const $childScope = _$.peekNextScopeId();
    _child({
      write: write,
      name: `${outerItem}`
    }, 1);
    _$.resumeSingleNodeForOf(items, middleItem => {
      const $scope2_id = _$.nextScopeId();
      _$.write("<div>");
      const $childScope2 = _$.peekNextScopeId();
      _child({
        write: write,
        name: `${outerItem}.${middleItem}`
      }, 1);
      _$.write("</div>");
      _$.writeScope($scope2_id, {
        "#childScope/0": _$.writeExistingScope($childScope2),
        _: _$.ensureScopeWithId($scope1_id)
      }, "__tests__/template.marko", "10:6");
    }, 0, $scope1_id, "#text/1", 1);
    _$.write("</div>");
    _$.writeScope($scope1_id, {
      outerItem,
      "#childScope/0": _$.writeExistingScope($childScope),
      _: _$.ensureScopeWithId($scope0_id)
    }, "__tests__/template.marko", "7:2", {
      outerItem: "7:6"
    });
  }, 0, $scope0_id, "#text/2", 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope($scope0_id, {
    items,
    write
  }, "__tests__/template.marko", 0, {
    items: "1:6",
    write: "5:8"
  });
  _$.resumeClosestBranch($scope0_id);
});