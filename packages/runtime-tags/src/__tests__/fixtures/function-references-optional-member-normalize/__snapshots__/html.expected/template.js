import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let foo = undefined;
  const a = {
    foo,
    bar: _._resume(() => foo?.bar, "__tests__/template.marko_0/a", $scope0_id)
  };
  const b = {
    foo,
    baz: _._resume(() => foo?.bar.baz, "__tests__/template.marko_0/b", $scope0_id)
  };
  const c = {
    foo: foo?.bar,
    baz: _._resume(() => foo?.bar.baz, "__tests__/template.marko_0/c", $scope0_id)
  };
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}<div></div>${_._el_resume($scope0_id, "#div/1")}<div></div>${_._el_resume($scope0_id, "#div/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_c");
  _._script($scope0_id, "__tests__/template.marko_0_b");
  _._script($scope0_id, "__tests__/template.marko_0_a");
  _._scope($scope0_id, {
    foo,
    foo_bar: foo?.bar,
    a,
    b,
    c
  }, "__tests__/template.marko", 0, {
    foo: "1:5",
    foo_bar: ["foo.bar", "1:5"],
    a: "2:7",
    b: "7:7",
    c: "12:7"
  });
  _._resume_branch($scope0_id);
});