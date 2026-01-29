import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let mounted = undefined;
  _._html("<div>");
  _._if(() => {
    if (mounted) {
      const $scope1_id = _._scope_id();
      _._html(`AB<!>${_._escape(mounted && "C")}${_._el_resume($scope1_id, "#text/0")}D`);
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "4:3");
      return 0;
    }
  }, $scope0_id, "#div/0", 1, /* mounted */1, /* mounted */1, "</div>");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    mounted
  }, "__tests__/template.marko", 0, {
    mounted: "1:5"
  });
  _._resume_branch($scope0_id);
});