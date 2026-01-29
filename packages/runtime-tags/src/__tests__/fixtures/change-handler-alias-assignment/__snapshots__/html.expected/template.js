import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    fooChange: $fooChange,
    foo: bar
  } = {
    foo: 1,
    fooChange: _._resume(function (v) {
      ($btn => $btn())(_._el_read_error).textContent = v;
    }, "__tests__/template.marko_0/fooBar", $scope0_id)
  };
  _._html(`<button>Before</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_$fooChange");
  _._scope($scope0_id, {
    $fooChange
  }, "__tests__/template.marko", 0, {
    $fooChange: "9:3"
  });
});