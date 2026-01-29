import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let num = 0;
  _._for_to(num, 0, 1, i => {
    const $scope1_id = _._scope_id();
    _._html(`<button>${_._escape(i)}</button>${_._el_resume($scope1_id, "#button/0")}`);
    _._script($scope1_id, "__tests__/template.marko_1_num");
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "3:2");
  }, 0, $scope0_id, "#text/0", /* num */1, /* num */1, /* num */1, 0, 1);
  _._scope($scope0_id, {
    num
  }, "__tests__/template.marko", 0, {
    num: "1:6"
  });
  _._resume_branch($scope0_id);
});