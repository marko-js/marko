import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let bar = 0;
  const {
    fooChange: $fooChange,
    foo
  } = {
    foo: bar,
    fooChange: _._resume(function (v) {
      bar = v;
    }, "__tests__/template.marko_0/foo", $scope0_id)
  };
  _._html(`<button>${_._escape(foo)}${_._el_resume($scope0_id, "#text/1")}:<!>${_._escape(bar)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_foo_$fooChange");
  _._scope($scope0_id, {
    foo,
    $fooChange
  }, "__tests__/template.marko", 0, {
    foo: "2:9",
    $fooChange: "9:20"
  });
  _._resume_branch($scope0_id);
});