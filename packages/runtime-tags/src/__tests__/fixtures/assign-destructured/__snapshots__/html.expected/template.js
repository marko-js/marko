import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let bar = 0;
  const {
    foo,
    fooChange: $fooChange
  } = {
    foo: 1,
    fooChange: _._resume(function (v) {
      bar = v;
    }, "__tests__/template.marko_0/foo", $scope0_id)
  };
  _._html(`<button>${_._escape(foo)}:<!>${_._escape(bar)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_bar_$fooChange");
  _._scope($scope0_id, {
    bar,
    $fooChange
  }, "__tests__/template.marko", 0, {
    bar: "1:5",
    $fooChange: "9:20"
  });
  _._resume_branch($scope0_id);
});