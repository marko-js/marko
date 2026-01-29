import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  _._for_to(3, 0, 1, index => {
    const $scope1_id = _._scope_id();
    _._html(`${_._escape(index)}-<!>${_._escape(count)}${_._el_resume($scope1_id, "#text/1")}`);
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "3:2");
  }, 0, $scope0_id, "#text/0", /* count */1, 0, 0);
  _._html(`<button>${_._escape(count)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
});