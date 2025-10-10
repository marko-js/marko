import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<button>");
  _._if(() => {
    if (input.show) {
      const $scope1_id = _._scope_id();
      _._html("<span id=count>0</span>");
      _._serialize_if($scope0_reason, /* input.show */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "2:4");
      return 0;
    }
  }, $scope0_id, "#button/0", _._serialize_guard($scope0_reason, /* input.show */0), 1, _._serialize_guard($scope0_reason, /* input.show */0), "</button>", 1);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});