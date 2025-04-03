import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let selected = false;
  const myThing = {
    selected: selected,
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write("<span>The thing</span>");
    })
  };
  const $childScope = _$.peekNextScope();
  _child({
    thing: myThing
  });
  _$.write(`<button>Toggle</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_selected");
  _$.writeScope($scope0_id, {
    selected,
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0, {
    selected: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});