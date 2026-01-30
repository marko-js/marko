import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $el_getter = _._hoist($scope0_id, "__tests__/template.marko_0_#div/hoist");
  _._if(() => {
    if (input.show) {
      const $scope1_id = _._scope_id();
      _._if(() => {
        if (input.show) {
          const $scope2_id = _._scope_id();
          const $el = _._el($scope2_id, "__tests__/template.marko_2_#div");
          _._html(`<div></div>${_._el_resume($scope2_id, "#div/0")}`);
          _child({
            value: $el
          });
          _._scope($scope2_id, {}, "__tests__/template.marko", "2:4");
          return 0;
        }
      }, $scope1_id, "#text/0", 1, _._serialize_guard($scope0_reason, /* input.show */0), _._serialize_guard($scope0_reason, /* input.show */0), 0, 1);
      _._scope($scope1_id, {
        _: _._serialize_if($scope0_reason, /* input.show */0) && _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "1:2");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, _._serialize_guard($scope0_reason, /* input.show */0), _._serialize_guard($scope0_reason, /* input.show */0));
  _child({
    value: $el_getter
  });
  _._html("<hr>");
  _._if(() => {
    if (true) {
      const $scope3_id = _._scope_id();
      _._html(`<div></div>${_._el_resume($scope3_id, "#div/0")}`);
      _._scope($scope3_id, {}, "__tests__/template.marko", "19:2");
      return 0;
    }
  }, $scope0_id, "#text/2", 1, 0, _._serialize_guard($scope0_reason, /* input.show */0), 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._serialize_if($scope0_reason, /* input.show */0) && _._scope($scope0_id, {
    input_show: input.show
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});