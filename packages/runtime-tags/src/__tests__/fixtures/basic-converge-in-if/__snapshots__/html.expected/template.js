import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let a = 0;
  let b = 0;
  _._if(() => {
    if (true) {
      const $scope1_id = _._scope_id();
      _._html(`${_._escape(a + b)}${_._el_resume($scope1_id, "#text/0")}`);
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "3:2");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
  _._scope($scope0_id, {
    a,
    b
  }, "__tests__/template.marko", 0, {
    a: "1:6",
    b: "2:6"
  });
  _._resume_branch($scope0_id);
});