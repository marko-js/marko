import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let foo = {
    bar: "bar"
  };
  const baz = {
    foo,
    bar: _._resume(() => foo.bar, "__tests__/template.marko_0/baz", $scope0_id)
  };
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_baz");
  _._scope($scope0_id, {
    foo,
    baz
  }, "__tests__/template.marko", 0, {
    foo: "1:5",
    baz: "2:7"
  });
  _._resume_branch($scope0_id);
});