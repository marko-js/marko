import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  const $hoisted_el = _._hoist($scope0_id, "__tests__/template.marko_0_$hoisted_el/hoist");
  _._if(() => {
    if (input.show) {
      const $scope1_id = _._scope_id();
      _._if(() => {
        if (input.show) {
          const $scope2_id = _._scope_id();
          const el = _._el($scope2_id, "__tests__/template.marko_2/#div");
          _._html(`<div></div>${_._el_resume($scope2_id, "#div/0")}`);
          _child({
            value: el
          });
          _._scope($scope2_id, {}, "__tests__/template.marko", "2:4");
          return 0;
        }
      }, $scope1_id, "#text/0", 1, _._serialize_guard($serialize, /* input.show */0), _._serialize_guard($serialize, /* input.show */0), 0, 1);
      _._scope($scope1_id, {
        _: _._serialize_if($serialize, /* input.show */0) && _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "1:2");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, _._serialize_guard($serialize, /* input.show */0), _._serialize_guard($serialize, /* input.show */0));
  const $childScope = _._peek_scope_id();
  _child({
    value: $hoisted_el
  });
  _._html("<hr>");
  _._if(() => {
    if (true) {
      const $scope3_id = _._scope_id();
      const el2 = _._el();
      _._html(`<div></div>${_._el_resume($scope3_id, "#div/0")}`);
      _._scope($scope3_id, {}, "__tests__/template.marko", "19:2");
      return 0;
    }
  }, $scope0_id, "#text/2", 1, 0, _._serialize_guard($serialize, /* input.show */0), 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    input_show: _._serialize_if($serialize, /* input.show */0) && input.show,
    "#childScope/1": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});