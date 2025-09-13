import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  const output = _._el($scope0_id, "__tests__/template.marko_0/#div");
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  _._if(() => {
    if (input.show) {
      const $scope1_id = _._scope_id();
      _child({
        foo: "bar",
        output: output
      });
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "3:1");
      return 0;
    }
  }, $scope0_id, "#text/1", _._serialize_guard($serialize, /* input.show */0), _._serialize_guard($serialize, /* input.show */0), _._serialize_guard($serialize, /* input.show */0), 0, 1);
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});