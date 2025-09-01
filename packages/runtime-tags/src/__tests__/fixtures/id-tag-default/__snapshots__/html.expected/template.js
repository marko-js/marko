import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let bar = undefined;
  let baz = "baz";
  const alwaysFoo = "foo" ?? _$.nextTagId();
  const sometimesBar = bar ?? _$.nextTagId();
  const sometimesBaz = baz ?? _$.nextTagId();
  _$.write(`<button>toggle</button>${_$.markResumeNode($scope0_id, "#button/0")}<div${_$.attr("id", alwaysFoo)}>foo</div><div${_$.attr("id", sometimesBar)}>bar</div>${_$.markResumeNode($scope0_id, "#div/2")}<div${_$.attr("id", sometimesBaz)}>baz</div>${_$.markResumeNode($scope0_id, "#div/3")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_bar_baz");
  _$.writeScope($scope0_id, {
    bar,
    baz
  }, "__tests__/template.marko", 0, {
    bar: "1:5",
    baz: "2:5"
  });
  _$.resumeClosestBranch($scope0_id);
});