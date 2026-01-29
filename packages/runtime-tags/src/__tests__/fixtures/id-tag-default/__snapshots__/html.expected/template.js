import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let bar = undefined;
  let baz = "baz";
  const alwaysFoo = "foo" || _._id();
  const sometimesBar = bar || _._id();
  const sometimesBaz = baz || _._id();
  _._html(`<button>toggle</button>${_._el_resume($scope0_id, "#button/0")}<div${_._attr("id", alwaysFoo)}>foo</div><div${_._attr("id", sometimesBar)}>bar</div>${_._el_resume($scope0_id, "#div/2")}<div${_._attr("id", sometimesBaz)}>baz</div>${_._el_resume($scope0_id, "#div/3")}`);
  _._script($scope0_id, "__tests__/template.marko_0_bar_baz");
  _._scope($scope0_id, {
    bar,
    baz
  }, "__tests__/template.marko", 0, {
    bar: "1:5",
    baz: "2:5"
  });
  _._resume_branch($scope0_id);
});