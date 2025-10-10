import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = 0;
  _._if(() => {
    if (input.show) {
      const $scope1_id = _._scope_id();
      _._html(`${_._escape(value)}${_._el_resume($scope1_id, "#text/0")}`);
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "2:2");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, _._serialize_guard($scope0_reason, /* input.show */0), _._serialize_guard($scope0_reason, /* input.show */0), 0, 1);
  _._html(`<button>Update</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    value: _._serialize_if($scope0_reason, /* input.show */0) && value
  }, "__tests__/template.marko", 0, {
    value: "1:6"
  });
  _._resume_branch($scope0_id);
});